import { Outlet } from "react-router-dom"

const AppLayout = () => {
  return (
    <div>
      <main className="min-h-screen container">
        {/*Header */}
        <Outlet />
      </main>

      <div className="p-10 text-center bg-gray-800 mt-10 text-white">
        Made with ❤️ by <a className="text-md font-bold text-blue-500" href="https://github.com/Naelskrrrt" target="_blank">NaelSkrrrt ©</a>
      </div>
    </div>
  )
}

export default AppLayout
