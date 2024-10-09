import { Outlet } from "react-router-dom"
import Navbar from "../Pages/Navbar"
import Footer from "../Pages/Footer"

const Root = () => {
  return (
    <div >
    <div className="max-w-7xl mx-auto font-poppins mt-6">
        <Navbar />
      <Outlet />
    </div>
      <Footer />
    </div>
  )
}

export default Root
