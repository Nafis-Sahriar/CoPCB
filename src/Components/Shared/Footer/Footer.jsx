import Link from 'next/link';
import React from 'react';
import { FaFacebook, FaTwitter, FaYoutube } from 'react-icons/fa';
import { FaHexagonNodes } from 'react-icons/fa6';

const Footer = () => {
    return (
        <footer className="footer sm:footer-horizontal  p-10 bg-black/50 border-t border-gray-700 text-white w-[90%] mx-auto">

            <div>
                <FaHexagonNodes size={50} className='text-green-500'></FaHexagonNodes>
                <p className='text-white font-bold text-2xl italic'>CoPCB</p>
                <p className='text-gray-300 text-sm'>Copyright © 2026 - All right reserved by CoPCB Ltd.</p>
            </div>
  <nav>
    <h6 className="footer-title">Services</h6>
    <a className="link link-hover text-white">Branding</a>
    <a className="link link-hover text-white">Design</a>
    <a className="link link-hover text-white">Marketing</a>
    <a className="link link-hover text-white">Advertisement</a>
  </nav>
  <nav>
    <h6 className="footer-title">Company</h6>
    <a className="link link-hover text-white">About us</a>
    <a className="link link-hover text-white">Contact</a>
    <a className="link link-hover text-white">Jobs</a>
    <a className="link link-hover text-white">Press kit</a>
  </nav>
  <nav>
    <h6 className="footer-title">Social</h6>
    <div className="grid grid-flow-col gap-4">

        <Link href="https://www.facebook.com/CoPCB" target="_blank" className="text-gray-400 hover:text-white transition-colors">
           <FaFacebook size={20} />
        </Link>
        <Link href="https://www.youtube.com/CoPCB" target="_blank" className="text-gray-400 hover:text-white transition-colors">
           <FaYoutube size={20} />
        </Link>
        <Link href="https://www.twitter.com/CoPCB" target="_blank" className="text-gray-400 hover:text-white transition-colors">
           <FaTwitter size={20} />
        </Link>
    
  
        
     
    </div>
  </nav>
</footer>
    );
};

export default Footer;