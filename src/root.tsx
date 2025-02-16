// @ts-nocheck

import {
    component$,
    useClientEffect$,
    useVisibleTask$,
} from "@builder.io/qwik"
import { useLocation } from "@builder.io/qwik-city"
import {
    QwikCityProvider,
    RouterOutlet,
    ServiceWorkerRegister,
} from "@builder.io/qwik-city"
import { RouterHead } from "./router-head"
import Head from "./routes/head"
import "./global.css"
import {
    AppContextProvider,
    camelize,
    isDev,
} from "Base"
import DevTools from "./BaseComponents/DevTools"

export default component$(async props => {

    let {
        settings,
        defaultLocale,
        locales,
        locale,
    } = props

    const supportedLocales = (locales || globalThis.locales)?.reduce((supportedLocales, locale) => {
        supportedLocales[camelize(locale.englishName)] = locale.key
        return supportedLocales
    }, {})

    globalThis.supportedLocales = supportedLocales

    globalThis.settings = globalThis.settings || settings

    if (!settings) {
        settings = globalThis.settings
    }
    if (!defaultLocale) {
        defaultLocale = globalThis.defaultLocale
    }
    if (!locales) {
        locales = globalThis.locales
    }
    if (!locale) {
        locale = globalThis.locale
    }

    useVisibleTask$(() => {
        globalThis.settings = settings
        globalThis.defaultLocale = defaultLocale
        globalThis.locales = locales
        globalThis.locale = locale
        globalThis.supportedLocales = supportedLocales
    }, { strategy: "document-ready" })

    const scriptContent = `const handlers = {}
    on = (name, fn) => {
        if (!handlers[name]) handlers[name] = [];
        handlers[name].push(fn);
    }

    trigger = (name, params) => {
        if (!handlers[name]) return false;
        handlers[name].forEach((fn) => fn.call(fn, params));
    }

    off = (name, fn) => {
        if (handlers[name]) {
            const index = handlers[name].indexOf(fn);
            if (index >= 0) handlers[name].splice(index, 1);
        }
    }
    `

    const paginationBehaviors = `const paginationBehaviors = {

    };`

    const scroll = "let observer=null;const Scroll={toggle:(t,e,r)=>{const o=`[${e}]`,l=Array.from(t.target.querySelectorAll(o));t.target.getAttribute(\"filter\")&&l.push(t.target),l.forEach((t=>{t.getAttribute(e).split(\" \").forEach((e=>{r?t.classList.add(e):t.classList.remove(e)}))}))},watchScroll:()=>{document.querySelectorAll(\".scroll, .scroll-once\").forEach((t=>{const e=(t.getAttribute(\"on\")||\"100\")/100;observer=new IntersectionObserver((t=>{t.forEach((t=>{if(t.isIntersecting){const e=t.target.class?.indexOf(\"scroll-once\")>-1,r=t.target.hasAttribute(\"done\")&&1==t.target.getAttribute(\"done\");e?r||(Scroll.toggle(t,\"in\",!0),Scroll.toggle(t,\"out\",!1),t.target.setAttribute(\"done\",!0)):(Scroll.toggle(t,\"in\",!0),Scroll.toggle(t,\"out\",!1))}else{const e=t.target.class?.indexOf(\"scroll-once\")>-1;t.target.hasAttribute(\"done\")&&t.target.getAttribute(\"done\");e||(Scroll.toggle(t,\"in\",!1),Scroll.toggle(t,\"out\",!0))}}))}),{root:null,rootMargin:\"0px\",threshold:e>0&&e<1?e:1}),observer.observe(t)}))}};Scroll.watchScroll();"

    return <>
        <QwikCityProvider>
            <AppContextProvider>
                <head>
                    <meta charSet="utf-8" />
                    {/* <link
                        rel="manifest"
                        href="/manifest.json"
                    /> */}
                    <RouterHead />
                    <Head />
                    <script dangerouslySetInnerHTML={scriptContent} />
                    <script dangerouslySetInnerHTML={paginationBehaviors} />
                    <script dangerouslySetInnerHTML={scroll} />
                    <ServiceWorkerRegister />
                    <DevTools />
                </head>
                <body>
                    {
                        isDev() &&
                        <a
                            href="/clear-cache"
                            target="_blank"
                            class="fixed left-4 text-xs bottom-4 py-1 px-2 text-white bg-red-800 hover:bg-red-950 cursor-pointer transition-all rounded-full bg-black/50 text-black/50 z-50"
                        >
                            Clear cache
                        </a>
                    }
                    <RouterOutlet />
                </body>
            </AppContextProvider>
        </QwikCityProvider>
    </>
})
