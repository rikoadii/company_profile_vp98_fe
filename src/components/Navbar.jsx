import logo from "../assets/logo_vp98.png"

export default function Navbar() {
  return (
    <nav className="w-full px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img 
            src={logo} 
            alt="Victory Production Logo" 
            className="h-20 w-auto"
          />
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="/" className="text-gray-700 font-medium hover:text-red-600 transition-colors">
            Home
          </a>
          <a href="/about" className="text-gray-700 font-medium hover:text-red-500 transition-colors">
            About
          </a>
          <a href="/services" className="text-gray-700 font-medium hover:text-red-500 transition-colors">
            Services
          </a>
          <a href="/team" className="text-gray-700 font-medium hover:text-red-500 transition-colors">
            Team
          </a>
          <a href="/projects" className="text-gray-700 font-medium hover:text-red-500 transition-colors">
            Projects
          </a>
        </div>

        {/* Contact Button */}
        <button className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-full font-medium transition-colors">
          Contact
        </button>
      </div>
    </nav>
  )
}
