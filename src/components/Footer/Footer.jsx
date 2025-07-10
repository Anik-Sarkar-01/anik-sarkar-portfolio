import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#0D1321] border-t border-gray-800 py-6 mt-16">
      <div className="max-w-6xl mx-auto px-4 text-center text-sm text-gray-500">
        <p>
          © {new Date().getFullYear()} <span className="text-[#00ff99] font-semibold">Anik Sarkar</span>. Built with React & ❤️.
        </p>
        <p className="text-xs mt-1 text-gray-600">
          Designed with focus, coffee, and a touch of chaos.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
