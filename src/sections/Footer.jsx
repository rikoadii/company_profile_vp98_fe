import { FaFacebookF } from "react-icons/fa";import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
export default function Footer() {
  return (
    <div>
      <footer className="footer sm:footer-horizontal text-[#0A142F] px-18 pt-16 gap-8">
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
            <a  className="flex items-center justify-center w-6 h-6 rounded-full bg-black text-gray-400 hover:bg-[#FF0000] transition-colors duration-300">
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
      <div className="border-t border-gray-300 mx-18"></div>
      
      {/* Copyright section (optional) */}
      <div className="text-center pt-4 pb-8 px-18 text-gray-600 text-sm">
        <p>&copy; 2025 Victory Production. All rights reserved.</p>
      </div>
    </div>
  );
}