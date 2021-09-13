import React from "react";
import "./footer.css";
import { FaFacebook } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import footerImg from "../../assets/images/footerImg.png";

const Footer: React.FC = () => {
  return (
    <div className="footer">
      <div className="footer-inner">
        <div className="footer-nav">
          <img src={footerImg} alt="" />
          <div className="footer-external-links">
            <a href="/">Legal Disclaimer</a>
            <a href="/">Privacy Policy</a>
            <a href="/">Contact Us</a>
            <a href="/">Team</a>
          </div>
          <div className="footer-external-social">
            <h3>Social</h3>
            <a className="twitter" href="/">
              <FaTwitter />
            </a>
            <a className="discord" href="/">
              <FaDiscord />
            </a>
            <a className="facebook" href="/">
              <FaFacebook />
            </a>
          </div>
        </div>
        <p>© Copyright 2019 HappyAddons. All right reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
