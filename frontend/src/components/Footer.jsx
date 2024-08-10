import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-blue-600 text-white py-4 mt-6 shadow-md">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} DisasterReady. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
