// @ts-nocheck
import { QwikAuth$ } from "@auth/qwik";
import type { Provider } from "@auth/auth/providers"
import Keycloak from "@auth/qwik/providers/keycloak"
import { post } from "Base"
// import AppleProvider from "next-auth/providers/apple"
// import Facebook from "@auth/qwik/providers/facebook"
// import GitHub from "@auth/qwik/providers/github"
// import Google from "@auth/qwik/providers/google"
// import Instagram from "@auth/qwik/providers/instagram"
// import Linkedin from "@auth/qwik/providers/linkedin"
// import Twitter from "@auth/qwik/providers/twitter"

const refreshAccessToken = async (token, env) => {
    const resp = await fetch(`${globalThis.settings.AccountsUrl}/realms/${globalThis.settings.AccountsRealm || "Development"}/protocol/openid-connect/token`, {
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({
            client_id: "Site",
            client_secret: globalThis.settings.KeycloakClientSecret || env.get("KEYCLOAK_CLIENT_SECRET"),
            grant_type: "refresh_token",
            refresh_token: token.refresh_token,
        }),
        method: "POST",
    })
    const refreshToken = await resp.json();
    return {
        access_token: refreshToken.access_token,
        id_token: refreshToken.id_token,
        expires_at: Math.floor(Date.now() / 1000) + refreshToken.expires_in,
        refresh_token: refreshToken.refresh_token,
    };
}

export const { onRequest, useSession, useSignIn, useSignOut } = QwikAuth$(
    ({ env }) => {
        const config = {

            secret: globalThis.settings.AuthSecret || env.get("AUTH_SECRET"),
            trustHost: true,
            events: {
                async signOut(message) {
                    const idpSignoutUrl = `${globalThis.settings.AccountsUrl}/realms/${globalThis.settings.AccountsRealm}/protocol/openid-connect/logout?redirect_uri=${globalThis.settings.SiteUrl}`
                    console.log(`Signout URL: ${idpSignoutUrl}`)
                    await fetch(idpSignoutUrl)
                },
                async signIn({ profile }) {
                    const userUuid = profile.sub
                    await post("/user/syncByGuid", {
                        userGuid: userUuid
                    })
                    console.log(`syncByGuid`)

                }
            },
            callbacks: {
                async jwt({ token, account, profile }) {
                    const nowTimeStamp = Math.floor(Date.now() / 1000)
                    if (account) {
                        token.access_token = account.access_token
                        token.id_token = profile.id_token
                        token.expires_at = account.expires_at
                        token.refresh_token = account.refresh_token
                        token.userUUID = profile.sub
                    } else {
                        if (nowTimeStamp > token.expires_at) {
                            console.log("Getting Refresh Token .......")
                            const result = await refreshAccessToken(token, env)
                            console.log("Got refresh token:", result)
                            if (!result.access_token) {
                                return null
                            }
                            token.access_token = result?.access_token
                            token.expires_at = result?.expires_at
                            token.refresh_token = result?.refresh_token
                        }
                    }
                    return token
                },
                async session({
                    session,
                    token,
                }) {
                    if (!token.access_token) {
                        return null
                    }
                    session.user.guid = token.userUUID
                    session.user.accessToken = token.access_token
                    return session
                }
            },
            providers: [
                // AppleProvider({
                //     clientId: env.get("APPLE_ID") as string,
                //     clientSecret: env.get("APPLE_SECRET") as string,
                // }),
                // Facebook({
                //     clientId: env.get("FACEBOOK_ID") as string,
                //     clientSecret: env.get("FACEBOOK_SECRET") as string,
                // }),
                // GitHub({
                //     clientId: env.get("GITHUB_ID") as string,
                //     clientSecret: env.get("GITHUB_SECRET") as string,
                // }),
                // Google({
                //     clientId: env.get("GOOGLE_ID") as string,
                //     clientSecret: env.get("GOOGLE_SECRET") as string,
                // }),
                // Instagram({
                //     clientId: env.get("INSTAGRAM_ID") as string,
                //     clientSecret: env.get("INSTAGRAM_SECRET") as string,
                // }),
                Keycloak({
                    clientId: "Site",
                    clientSecret: (globalThis.settings.KeycloakClientSecret || env.get("KEYCLOAK_CLIENT_SECRET")) as string,
                    issuer: `${globalThis.settings.AccountsUrl}/realms/${globalThis.settings.AccountsRealm || "Development"}` as string
                }),
                // Linkedin({
                //     clientId: env.get("LINKEDIN_ID") as string,
                //     clientSecret: env.get("LINKEDIN_SECRET") as string,
                // }),
                // Twitter({
                //     clientId: env.get("TWITTER_ID") as string,
                //     clientSecret: env.get("TWITTER_SECRET") as string,
                // }),
            ] as Provider[],
        }
        // console.log("Auth config:", JSON.stringify(config, null, 2));
        return config
    }
);
