import { FaFacebookF } from "react-icons/fa";import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
export default function Footer() {
  return (
    <div>
      {/* Smartphone Layout */}
      <footer className="md:hidden text-[#0A142F] px-4 sm:px-6 pt-8 sm:pt-12">
        <div className="space-y-6 sm:space-y-8">
          {/* Logo di tengah */}
          <div className="flex justify-center">
            <div className="max-w-[150px] sm:max-w-[200px]">
              <img src="../logo_vp98.png" alt="vp98" className="w-full h-auto"/>
            </div>
          </div>
          
          {/* Navigation dalam 2 kolom */}
          <div className="grid grid-cols-2 gap-4 sm:gap-6 text-center">
            {/* Kolom 1 */}
            <div className="space-y-4 sm:space-y-6">
              <nav>
                <h6 className="footer-title text-sm sm:text-base mb-2 sm:mb-3">Company</h6>
                <div className="space-y-1 sm:space-y-2">
                  <a className="block link link-hover text-xs sm:text-sm">About us</a>
                  <a className="block link link-hover text-xs sm:text-sm">Contact</a>
                  <a className="block link link-hover text-xs sm:text-sm">Jobs</a>
                  <a className="block link link-hover text-xs sm:text-sm">Press kit</a>
                </div>
              </nav>
              <nav>
                <h6 className="footer-title text-sm sm:text-base mb-2 sm:mb-3">Services</h6>
                <div className="space-y-1 sm:space-y-2">
                  <a className="block link link-hover text-xs sm:text-sm">Branding</a>
                  <a className="block link link-hover text-xs sm:text-sm">Design</a>
                  <a className="block link link-hover text-xs sm:text-sm">Marketing</a>
                  <a className="block link link-hover text-xs sm:text-sm">Advertisement</a>
                </div>
              </nav>
            </div>
            
            {/* Kolom 2 */}
            <div className="space-y-4 sm:space-y-6">
              <nav>
                <h6 className="footer-title text-sm sm:text-base mb-2 sm:mb-3">Social</h6>
                <div className="flex justify-center">
                  <div className="grid grid-cols-4 gap-2 sm:gap-3">
                    <a className="flex items-center justify-center w-6 h-6 sm:w-6 sm:h-6 rounded-full bg-black text-gray-400 hover:bg-[#FF0000] transition-colors duration-300">
                      <FaFacebookF size={18} color="white" className="sm:w-6 sm:h-6 mt-1" />
                    </a>
                    <a className="flex items-center justify-center w-6 h-6 sm:w-6 sm:h-6 rounded-full bg-black text-gray-400 hover:bg-[#FF0000] transition-colors duration-300">
                      <FaInstagram size={18} color="white" className="sm:w-6 sm:h-6" />
                    </a>
                    <a className="flex items-center justify-center w-6 h-6 sm:w-6 sm:h-6 rounded-full bg-black text-gray-400 hover:bg-[#FF0000] transition-colors duration-300">
                      <FaTiktok size={18} color="white" className="sm:w-6 sm:h-6" />
                    </a>
                    <a className="flex items-center justify-center w-6 h-6 sm:w-6 sm:h-6 rounded-full bg-black text-gray-400 hover:bg-[#FF0000] transition-colors duration-300">
                      <FaLinkedinIn size={18} color="white" className="sm:w-6 sm:h-6" />
                    </a>
                  </div>
                </div>
              </nav>
              <nav>
                <h6 className="footer-title text-sm sm:text-base mb-2 sm:mb-3">Legal</h6>
                <div className="space-y-1 sm:space-y-2">
                  <a className="block link link-hover text-xs sm:text-sm">Terms of use</a>
                  <a className="block link link-hover text-xs sm:text-sm">Privacy policy</a>
                  <a className="block link link-hover text-xs sm:text-sm">Cookie policy</a>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </footer>

      {/* Tablet & Desktop Layout */}
      <footer className="footer hidden md:flex md:flex-row md:justify-between md:items-start text-[#0A142F] px-18 pt-16 gap-8">
        <aside className="ml-3 w-95">
          <img src="../logo_vp98.png" alt="vp98"/>
        </aside>
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
        <nav>
          <h6 className="footer-title">Social</h6>
          <div className="grid grid-flow-col gap-4">
            <a className="flex items-center justify-center w-6 h-6 rounded-full bg-black text-gray-400 hover:bg-[#FF0000] transition-colors duration-300">
              <FaFacebookF size={16} color="white" className="mt-1.5" />
            </a>
            <a className="flex items-center justify-center w-6 h-6 rounded-full bg-black text-gray-400 hover:bg-[#FF0000] transition-colors duration-300">
              <FaInstagram size={16} color="white" />
            </a>
            <a className="flex items-center justify-center w-6 h-6 rounded-full bg-black text-gray-400 hover:bg-[#FF0000] transition-colors duration-300">
              <FaTiktok size={16} color="white" />
            </a>
            <a className="flex items-center justify-center w-6 h-6 rounded-full bg-black text-gray-400 hover:bg-[#FF0000] transition-colors duration-300">
              <FaLinkedinIn size={16} color="white" />
            </a>
          </div>
        </nav>
      </footer>

      {/* Garis pemisah di bawah footer */}
      <div className="border-t border-gray-300 mx-4 sm:mx-6 md:mx-8 lg:mx-12 xl:mx-18 mt-6 sm:mt-8"></div>
      
      {/* Copyright section (optional) */}
      <div className="text-center pt-3 sm:pt-4 pb-6 sm:pb-8 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-18 text-gray-600 text-xs sm:text-sm">
        <p>&copy; 2025 Victory Production. All rights reserved.</p>
      </div>
    </div>
  );
}