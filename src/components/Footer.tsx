import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-deep-ocean-blue text-white py-12">
      <div className="container mx-auto text-center">
        <h3 className="text-2xl font-bold">Elena Academy</h3>
        <div className="flex justify-center space-x-6 mt-4">
          <a href="#home" className="hover:text-soft-gold">Home</a>
          <a href="#courses" className="hover:text-soft-gold">Courses</a>
          <a href="#blog" className="hover:text-soft-gold">Blog</a>
          <a href="#about" className="hover:text-soft-gold">About</a>
          <a href="#contact" className="hover:text-soft-gold">Contact</a>
        </div>
        <div className="mt-4">
          <p>Email: info@alqalamtuition.com</p>
          <p>Phone: +123 456 7890</p>
        </div>
        <div className="flex justify-center space-x-4 mt-4 text-2xl">
          <a href="#" className="hover:text-soft-gold">🌐</a>
          <a href="#" className="hover:text-soft-gold">📘</a>
          <a href="#" className="hover:text-soft-gold">📸</a>
        </div>
        <p className="mt-8 text-sm text-gray-400">&copy; 2025 Elena Academy. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
