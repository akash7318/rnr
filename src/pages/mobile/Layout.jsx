import { Outlet } from "react-router-dom"

function Layout() {
    return (
        <main className="w-screen h-screen p-6">
            <div className="flex justify-between">
                <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-black"></div>
                    <div className="w-3 h-3 rounded-full bg-black"></div>
                    <div className="w-3 h-3 rounded-full bg-black"></div>
                </div>
                <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-black"></div>
                    <div className="w-3 h-3 rounded-full bg-black"></div>
                    <div className="w-3 h-3 rounded-full bg-black"></div>
                </div>
            </div>

            <Outlet />
        </main>
  )
}

export default Layout