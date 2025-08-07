import logo from "../assets/logo_vp98.png"
import "../App.css"

export default function Navbar() {
  return (

    <div className="navbar bg-neutral-50 navbar-custom rounded-4xl px-18">
  <div className="navbar-start">
    {/* <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-neutral lg:hidden text-neutral-content">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-neutral rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li><a className="dropdown-link">Home</a></li>
        <li>
          <a className="dropdown-link">Parent</a>
          <ul className="p-2">
            <li><a className="dropdown-link">Submenu 1</a></li>
            <li><a className="dropdown-link">Submenu 2</a></li>
          </ul>
        </li>
        <li><a className="dropdown-link">Item 3</a></li>
      </ul>
    </div> */}
    
      <img src={logo} alt="Victory Production" className="h-16 w-auto" />

  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><a className="navbar-link text-base font-semibold">Home</a></li>
      <li><a className="navbar-link text-base font-semibold">About</a></li>
      <li><a className="navbar-link text-base font-semibold">Services</a></li>
      <li><a className="navbar-link text-base font-semibold">Team</a></li>
      <li><a className="navbar-link text-base font-semibold">Projects</a></li>
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn btn-header rounded-full px-8 border-none shadow-none font-semibold text-base">Contact</a>
  </div>
</div>
  )
}
