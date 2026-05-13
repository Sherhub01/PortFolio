import React from "react";
import { FaFacebookF, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa6";
import { GrLinkedinOption } from "react-icons/gr";
import { LiaBasketballBallSolid } from "react-icons/lia";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footersec flex flex-center flex-col gap-2">
        <div className="logo">
          {/* <img src="/img/logo.png" alt="logo" /> */}
        </div>

        <ul className="ul flex gap-2">
          {/* <li><a href="/services">Services</a></li>
          <li><a href="/projects">Works</a></li>
          <li><a href="/">Resume</a></li>
          <li><a href="/shop">Shop</a></li>
          <li><a href="/blogs">Blogs</a></li>
          <li><a href="/contact">Contact</a></li> */}
          <Link to={"/services"}>Services</Link>
          <Link to={"/projects"}>Projects</Link>
          <Link to={"/"}>Resume</Link>
          <Link to={"/shop"}>Shop</Link>
          <Link to={"/blogs"}>Blogs</Link>
          <Link to={"/contact"}>Contact</Link>
        </ul>

        <ul className="hero_social">
          <li><a href="https://www.instagram.com/__serenesoul01?igsh=NmFmeWp2cm9hOXVs&utm_source=qr"><FaInstagram /></a></li>
          <li><a href="https://www.linkedin.com/in/sherali01/" target="_blank" rel="noopener noreferrer"><GrLinkedinOption /></a></li>
          <li><a href="https://github.com/Sherhub01"><FaGithub /></a></li>
        </ul>

        <div className="copyrights">
          &copy; 2025 All Right Reserved By <span>Sher Ali</span>
        </div>
      </div>
    </footer>
  );
}
