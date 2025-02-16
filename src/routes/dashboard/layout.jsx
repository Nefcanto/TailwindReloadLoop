import {
    component$,
    Slot,
} from "@builder.io/qwik"
import { useLocation } from "@builder.io/qwik-city"
import {
    checkLogin,
    loadDashboard,
} from "Accounts"
import { Menu } from "Dashboard"

export const onRequest = event => {
    checkLogin(event)
}

const Layout = component$(({ }) => {

    const data = loadDashboard().value
    const { dashboardStatics } = data
    const { url } = useLocation()

    return <div class="min-h-[50vh] p-4">
        <div class={"flex flex-col sm:flex-row max-w-6xl mx-auto bg-gray-100 rounded-md my-10 sm:p-2"}>
            <div class={"sm:w-[30%] flex flex-col sm:flex-none p-2 gap-y-2"}>
                {
                    Menu?.map((item, index) => {
                        return <button
                            class={`p-2 block rounded-md ${url.pathname.includes(item.path) ? "bg-custom-color1 text-white" : "bg-gray-200 hover:bg-custom-color1/40 duration-300"}`}
                            key={index + 1}
                            onClick$={() => {
                                window.location.href = `/dashboard${item.path}`
                            }}
                        >
                            {dashboardStatics[item.title]}
                        </button>
                    }
                    )
                }
            </div>
            <div class="flex-1 p-2 overflow-x-auto max-h-[50vh] overflow-h-auto">
                <Slot />
            </div>
        </div>
    </div>
})

export default Layout

export { loadDashboard }
