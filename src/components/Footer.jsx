import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
return (
<footer className="bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-300 pt-10">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
{/* About */}
<div>
<h3 className="text-xl font-semibold text-sky-600 mb-4">HobbyHub</h3>
<p className="text-sm">
Connect with people through shared passions. Join or create hobby groups and discover your community.
</p>
</div>

      {/* Links */}
      <div>
        <h4 className="text-lg font-semibold mb-3">Explore</h4>
        <ul className="space-y-2 text-sm">
          <li><a href="/allGroups" className="hover:text-sky-500">Browse Groups</a></li>
          <li><a href="/groups/create" className="hover:text-sky-500">Create Group</a></li>
          <li><a href="/about" className="hover:text-sky-500">About Us</a></li>
          <li><a href="/faq" className="hover:text-sky-500">FAQs</a></li>
        </ul>
      </div>

      {/* Legal */}
      <div>
        <h4 className="text-lg font-semibold mb-3">Legal</h4>
        <ul className="space-y-2 text-sm">
          <li><a href="/privacy" className="hover:text-sky-500">Privacy Policy</a></li>
          <li><a href="/terms" className="hover:text-sky-500">Terms & Conditions</a></li>
          <li><a href="/cookies" className="hover:text-sky-500">Cookie Policy</a></li>
        </ul>
      </div>

      {/* Contact & Social */}
      <div>
        <h4 className="text-lg font-semibold mb-3">Connect</h4>
        <ul className="space-y-2 text-sm">
          <li className="flex items-center space-x-2">
            <FaEnvelope className="text-sky-500" />
            <a href="mailto:info@hobbyhub.com" className="hover:text-sky-500">info@hobbyhub.com</a>
          </li>
          <li className="flex space-x-4 mt-4">
            <a href="https://www.facebook.com/" aria-label="Facebook" className="hover:text-sky-500"><FaFacebook /></a>
            <a href="https://x.com/" aria-label="Twitter" className="hover:text-sky-500"><FaTwitter /></a>
            <a href="https://www.instagram.com/" aria-label="Instagram" className="hover:text-sky-500"><FaInstagram /></a>
          </li>
        </ul>
      </div>
    </div>

    <div className="border-t border-gray-300 dark:border-gray-700 pt-4 pb-6 text-center text-sm">
      &copy; {new Date().getFullYear()} HobbyHub. All rights reserved.
    </div>
  </div>
</footer>
);
};

export default Footer