import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white py-10">
      <div className="container mx-auto flex flex-col items-center">
        <p className="text-lg">© 2023 Tuffer. All rights reserved.</p>
        <div className="flex mt-4">
          <a href="#" className="mr-4 hover:text-gray-600">
            Terms of Service
          </a>
          <a href="#" className="mr-4 hover:text-gray-600">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-gray-600">
            Contact Us
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
