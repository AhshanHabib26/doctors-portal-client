import React from "react";
import './Footer.css'

const Footer = () => {
  return (
    <div className=" mt-20 footer_container">
      <footer class="footer p-10 text-base-content grid grid-cols-1 lg:grid-cols-3">
        <div>
          <span class="footer-title">Services</span>
          <a class="link link-hover">Branding</a>
          <a class="link link-hover">Design</a>
          <a class="link link-hover">Marketing</a>
          <a class="link link-hover">Advertisement</a>
        </div>
        <div>
          <span class="footer-title">Company</span>
          <a class="link link-hover">About us</a>
          <a class="link link-hover">Contact</a>
          <a class="link link-hover">Jobs</a>
          <a class="link link-hover">Press kit</a>
        </div>
        <div>
          <span class="footer-title">Legal</span>
          <a class="link link-hover">Terms of use</a>
          <a class="link link-hover">Privacy policy</a>
          <a class="link link-hover">Cookie policy</a>
        </div>
      </footer>
      <footer class="px-10 py-4 border-t text-center">
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
