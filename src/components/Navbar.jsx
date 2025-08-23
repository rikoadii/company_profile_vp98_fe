import logo from "../assets/logo_vp98.webp"
import "../App.css"
import { useState } from "react"
import useContact from "../hooks/useContact"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { contact, loading, error } = useContact();

  // Debug logging
  console.log('Navbar - Contact:', contact);
  console.log('Navbar - Loading:', loading);
  console.log('Navbar - Error:', error);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const getWhatsAppLink = () => {
    console.log('Contact data:', contact);
    console.log('Loading state:', loading);
    
    if (loading || !contact) {
      console.log('Using fallback number');
      return "https://wa.me/${whatsappNumber}"; // default fallback number
    }
    
    // Remove any non-digit characters and ensure it starts with country code
    const cleanNumber = contact.replace(/\D/g, '');
    console.log('Clean number from API:', cleanNumber);
    
    const whatsappNumber = cleanNumber.startsWith('62') ? cleanNumber : `62${cleanNumber.startsWith('0') ? cleanNumber.slice(1) : cleanNumber}`;
    console.log('Final WhatsApp number:', whatsappNumber);
    
    return `https://wa.me/${whatsappNumber}`;
  };

  return (
    <div className="fixed top-0 left-0 right-0 w-full px-4 sm:px-8 md:px-12 lg:px-18 pt-8 z-50 bg-transparent">
      <div className="navbar bg-neutral-50 navbar-custom rounded-4xl relative shadow-lg">
        <div className="navbar-start">
          <img src={logo} alt="Victory Production" className="h-16 w-auto" />
        </div>
        
        {/* Desktop Menu */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li><a className="navbar-link text-base font-semibold" href="#home">Home</a></li>
            <li><a className="navbar-link text-base font-semibold" href="#about">About</a></li>
            <li><a className="navbar-link text-base font-semibold" href="#services">Services</a></li>
            <li><a className="navbar-link text-base font-semibold" href="#team">Team</a></li>
            <li><a className="navbar-link text-base font-semibold" href="#projects">Projects</a></li>
          </ul>
        </div>
        
        <div className="navbar-end">
          {/* Desktop Contact Button */}
          <a 
            href={getWhatsAppLink()} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn btn-header rounded-full px-8 border-none shadow-none font-semibold text-base hidden lg:flex"
          >
            Contact
          </a>
          
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
              <li><a className="navbar-link text-base font-semibold py-3" href="#home">Home</a></li>
              <li><a className="navbar-link text-base font-semibold py-3" href="#about">About</a></li>
              <li><a className="navbar-link text-base font-semibold py-3" href="#services">Services</a></li>
              <li><a className="navbar-link text-base font-semibold py-3" href="#team">Team</a></li>
              <li><a className="navbar-link ztext-base font-semibold py-3" href="#projects">Projects</a></li>
              <li className="pt-2">
                <a 
                  href={getWhatsAppLink()}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn btn-header rounded-full px-8 border-none shadow-none font-semibold text-base w-full"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  )
}