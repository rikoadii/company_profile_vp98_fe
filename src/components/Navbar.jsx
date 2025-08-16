import logo from "../assets/logo_vp98.webp"
import "../App.css"
import { useState } from "react"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="w-full px-4 sm:px-8 md:px-12 lg:px-18 pt-8">
      <div className="navbar bg-neutral-50 navbar-custom rounded-4xl relative">
        <div className="navbar-start">
          <img src={logo} alt="Victory Production" className="h-16 w-auto" />
        </div>
        
        {/* Desktop Menu */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li><a className="navbar-link text-base font-semibold" href="">Home</a></li>
            <li><a className="navbar-link text-base font-semibold">About</a></li>
            <li><a className="navbar-link text-base font-semibold">Services</a></li>
            <li><a className="navbar-link text-base font-semibold">Team</a></li>
            <li><a className="navbar-link text-base font-semibold">Projects</a></li>
          </ul>
        </div>
        
        <div className="navbar-end">
          {/* Desktop Contact Button */}
          <a className="btn btn-header rounded-full px-8 border-none shadow-none font-semibold text-base hidden lg:flex">Contact</a>
          
          {/* Mobile Hamburger Button */}
          <button 
            className="btn btn-ghost lg:hidden p-2 text-black hover:!bg-transparent focus:!bg-transparent focus:!border-none hover:!shadow-none focus:!shadow-none hover:!border-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-neutral-50 rounded-b-2xl shadow-lg lg:hidden z-50 mt-2">
            <ul className="menu menu-vertical p-4">
              <li><a className="navbar-link text-base font-semibold py-3">Home</a></li>
              <li><a className="navbar-link text-base font-semibold py-3">About</a></li>
              <li><a className="navbar-link text-base font-semibold py-3">Services</a></li>
              <li><a className="navbar-link text-base font-semibold py-3">Team</a></li>
              <li><a className="navbar-link text-base font-semibold py-3">Projects</a></li>
              <li className="pt-2">
                <a className="btn btn-header rounded-full px-8 border-none shadow-none font-semibold text-base w-full">Contact</a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  )
}