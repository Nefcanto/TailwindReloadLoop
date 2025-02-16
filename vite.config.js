import { defineConfig } from "vite"
import { qwikVite } from "@builder.io/qwik/optimizer"
import { qwikCity } from "@builder.io/qwik-city/vite"
import tailwindcss from '@tailwindcss/vite'
import tsconfigPaths from "vite-tsconfig-paths"
import { partytownVite } from "@builder.io/partytown/utils"
import { join } from "path"
import collectRichTextRenderers from "./RichTextRendererCollector"
import emptyDashboardProvider from "./EmptyDashboardProvider"
import provideLoaders from "./LoaderProvider"
import provideNullLayouts from "./NullLayoutProvider"
import ensureAddCommentUsesEntityOnly from "./BuildPolicies/AddComment"

ensureAddCommentUsesEntityOnly()

collectRichTextRenderers()
provideLoaders()

let barrels = provideNullLayouts()
emptyDashboardProvider(barrels)

export default defineConfig(({ mode }) => {

    function inspect() {
        return {
            name: 'vite-plugin-inspect',
            enforce: 'pre',
            transform(css, id) {
                if (id.endsWith('.css')) {
                    console.log(css)
                }
            },
        }
    }

    return {
        plugins: [
            tailwindcss(),
            qwikCity({
                trailingSlash: false
            }),
            qwikVite({
                devTools: {
                    imageDevTools: false,
                },
            }),
            tsconfigPaths(),
            partytownVite({ dest: join(__dirname, "dist", "~partytown") }),
        ],
        dev: {
            headers: {
                "Cache-Control": "public, max-age=0",
            },
        },
        server: {
            headers: {
                "Cache-Control": "public, max-age=0",
            },
            host: "0.0.0.0",
            allowedHosts: true
        },
        preview: {
            headers: {
                "Cache-Control": "public, max-age=600",
            },
        },
        build: {
            rollupOptions: {
                external: [
                    ...barrels,
                ]
            },
        },
        optimizeDeps: {
            exclude: []
        }
    }
})
