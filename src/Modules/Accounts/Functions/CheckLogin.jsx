const checkLogin = event => {
    const session = event.sharedMap.get("session")
    if (!session || new Date(session.expires) < new Date()) {
        throw event.redirect(302, `/auth/signin?providerId=keycloak&redirectTo=${event.url.pathname}`);
    }
}

export default checkLogin
