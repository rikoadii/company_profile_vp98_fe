import logo from "../assets/logo_vp98.png"
import "../App.css"

export default function Navbar() {
  return (
    <div className="w-full flex justify-center py-4">
      <div className="navbar bg-neutral-50 items-center navbar-custom rounded-[50px] px-8 py-2 max-w-6xl w-full">
        
        {/* Logo */}
        <div className="navbar-start">
          <img src={logo} alt="Victory Production" className="h-16 w-auto" />
        </div>

        {/* Menu */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-6">
            <li><a className="navbar-link text-base font-semibold rounded-2xl">Home</a></li>
            <li><a className="navbar-link text-base font-semibold rounded-2xl">About</a></li>
            <li><a className="navbar-link text-base font-semibold rounded-2xl">Services</a></li>
            <li><a className="navbar-link text-base font-semibold rounded-2xl">Team</a></li>
            <li><a className="navbar-link text-base font-semibold rounded-2xl">Projects</a></li>
          </ul>
        </div>

        {/* Button */}
        <div className="navbar-end">
          <a className="btn bg-red-600 text-white rounded-4xl px-6 py-2 border-none shadow-none font-semibold text-base">
            Contact
          </a>
        </div>
      </div>
    </div>
  )
}
