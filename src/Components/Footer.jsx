import React from 'react';
import logo from './images/logo (2).png';
import socials from './images/Instagram.png';
import socials2 from './images/WhatsApp.png';
import socials3 from './images/Twitter.png';
import socials4 from './images/Facebook.png';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="mt-7 text-white pt-12 pb-8 relative px-6">
      {/* Top Divider */}
      <div className="h-1 bg-purple-600 absolute left-0 right-0 top-0"></div>

      {/* Footer Content */}
      <div className="flex flex-col lg:flex-row items-center justify-around lg:gap-14 gap-8">
        
        {/* Logo and Socials */}
        <div className="flex flex-col items-center lg:max-w-[20%] text-center gap-4">
          <Link to="/" onClick={() => window.scrollTo(0, 0)}>
            <img src={logo} className="hover:scale-105 transition-transform duration-500" width="80px" alt="Company Logo" />
          </Link>
          <p className="text-lg px-4">Empowering your home with innovative security and smart solutions.</p>
          <div className="flex gap-4 mt-2">
            <img src={socials} className="hover:scale-125 transition-transform duration-500" alt="Instagram" />
            <img src={socials2} className="hover:scale-125 transition-transform duration-500" alt="WhatsApp" />
            <img src={socials3} className="hover:scale-125 transition-transform duration-500" alt="Twitter" />
            <img src={socials4} className="hover:scale-125 transition-transform duration-500" alt="Facebook" />
          </div>
        </div>

        {/* Quick Links Section */}
        <div className="lg:max-w-[20%] flex flex-col items-center gap-4">
          <h2 className="font-bold text-2xl">Quick Links</h2>
          <ul className="text-lg font-medium space-y-2 text-center">
            <li><Link to="/shop" className="hover:text-purple-300">Shop</Link></li>
            <li><Link to="/services" className="hover:text-purple-300">Services</Link></li>
            <li><Link to="/contact" className="hover:text-purple-300">Contact Us</Link></li>
          </ul>
        </div>

        {/* Support Section */}
        <div className="lg:max-w-[20%] flex flex-col items-center gap-4">
          <h2 className="font-bold text-2xl">Support</h2>
          <ul className="text-lg font-medium space-y-2 text-center">
            <li><Link to="/faq" className="hover:text-purple-300">FAQ</Link></li>
            <li><Link to="/customer-support" className="hover:text-purple-300">Customer Support</Link></li>
            <li><Link to="/help" className="hover:text-purple-300">Help Center</Link></li>
          </ul>
        </div>

        {/* Resources Section */}
        <div className="lg:max-w-[20%] flex flex-col items-center gap-4">
          <h2 className="font-bold text-2xl">Resources</h2>
          <ul className="text-lg font-medium space-y-2 text-center">
            <li><Link to="/blog" className="hover:text-purple-300">Blog</Link></li>
            <li><Link to="/privacy" className="hover:text-purple-300">Privacy Policy</Link></li>
            <li><Link to="/terms" className="hover:text-purple-300">Terms of Service</Link></li>
          </ul>
        </div>

      </div>

      {/* Bottom Divider */}
      <div className="h-1 bg-purple-600 absolute left-0 right-0 bottom-0"></div>
    </footer>
  );
};

export default Footer;
