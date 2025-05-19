import React from 'react';

// Footer.jsx
const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-900 text-gray-600 dark:text-gray-300 w-full relative mt-auto">
      <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between">
        <p className="text-sm">&copy; {new Date().getFullYear()} HobbyHub. All rights reserved.</p>
        <div className="flex space-x-4 mt-2 md:mt-0">
          <a href="#" className="hover:text-sky-500">Privacy Policy</a>
          <a href="#" className="hover:text-sky-500">Terms</a>
          <a href="#" className="hover:text-sky-500">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
