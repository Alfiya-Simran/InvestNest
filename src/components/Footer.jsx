import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function Footer() {
  return (
    <footer className="bg-gray-100 text-center py-6 mt-10 border-t ">
      <div className="text-sm text-gray-600 mb-4">
        © {new Date().getFullYear()} InvestNest. All rights reserved.
      </div>

      {/* Social Media Icons */}
      <div className="flex justify-center space-x-6 mb-4">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <FaFacebook className="text-2xl text-gray-600 hover:text-blue-600" />
        </a>
        <a href="https://x.com" target="_blank" rel="noopener noreferrer">
        <FaXTwitter className="text-2xl text-gray-600 hover:text-blue-400" />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="text-2xl text-gray-600 hover:text-blue-700" />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="text-2xl text-gray-600 hover:text-pink-600" />
        </a>
      </div>

      {/* Terms & Privacy Links */}
      <div className="text-sm text-gray-600">
        <a href="/terms" className="hover:text-gray-800 mx-2">
          Terms
        </a>
        |
        <a href="/privacy" className="hover:text-gray-800 mx-2">
          Privacy
        </a>
      </div>
    </footer>
  );
}

export default Footer;
