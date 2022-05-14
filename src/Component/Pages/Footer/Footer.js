import React from "react";
import { Link } from "react-router-dom";
import './Footer.css'

const Footer = () => {
  return (
    <div className=" mt-20 footer_container">
      <footer className="footer p-10 text-base-content grid grid-cols-1 lg:grid-cols-3">
        <div>
          <span className="footer-title">Services</span>
          <Link to='/' className="link link-hover">Branding</Link>
          <Link to='/' className="link link-hover">Design</Link>
          <Link to='/' className="link link-hover">Marketing</Link>
          <Link to='/' className="link link-hover">Advertisement</Link>
        </div>
        <div>
          <span className="footer-title">Company</span>
          <Link to='/' className="link link-hover">About us</Link>
          <Link to='/' className="link link-hover">Contact</Link>
          <Link to='/' className="link link-hover">Jobs</Link>
          <Link to='/' className="link link-hover">Press kit</Link>
        </div>
        <div>
          <span className="footer-title">Legal</span>
          <Link to='/' className="link link-hover">Terms of use</Link>
          <Link to='/' className="link link-hover">Privacy policy</Link>
          <Link to='/' className="link link-hover">Cookie policy</Link>
        </div>
      </footer>
      <footer className="px-10 py-4 border-t text-center">
        <div>
          <p className=" text-accent font-semibold">
            Habib Design. A Unique Desisgn Solution Hub
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
