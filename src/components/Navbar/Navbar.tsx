import React, { useRef, useState } from "react";
import "./navbar.css";
import { FaEthereum, FaFacebook } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { Link } from "react-scroll";
import Button from "../Button/Button";
import { HiMenu } from "react-icons/hi";

const Navbar: React.FC = () => {
  const [menu, setMenu] = useState(false);

  const [setActive, setActiveState] = useState("");
  const [setHeight, setHeightState] = useState("0px");

  const content: any = useRef(null);

  function toggleAccordion() {
    setActiveState(setActive === "" ? "active" : "");
    setHeightState(
      setActive === "active" ? "0px" : `${content.current.scrollHeight}px`
    );
  }
  return (
    <div className="nav-bar">
      <div className="some-wrapper">
        <div className="web-nav">
          <div className="logo">Logo</div>
          <div className="nav-links">
            <Link smooth={true} duration={800} to="About">
              RoadMap
            </Link>
            <Link smooth={true} duration={800} to="Mint">
              About Us
            </Link>
            <Link smooth={true} duration={800} to="RoadMap">
              FAQ
            </Link>
          </div>
          <div className="external-links">
            <a className="twitter" href="/">
              <FaTwitter />
            </a>
            <a className="discord" href="/">
              <FaDiscord />
            </a>
          </div>
        </div>
        <Button className="metamsk-btn" label="Metamask" />
      </div>
      <div className="slide-menu">
        <div className="slide-outter">
          <div className="logo">Logo</div>
          <button onClick={toggleAccordion} className="menu-slide-btn">
            Menu
            <HiMenu
              className={menu ? "slide-menu-icon active" : "slide-menu-icon"}
            />
          </button>
        </div>
        <div
          ref={content}
          style={{ maxHeight: `${setHeight}` }}
          className="accordion__content"
        >
          <Link
            // className="accordion__text"
            onClick={toggleAccordion}
            smooth={true}
            duration={800}
            to="Home"
          >
            HOME
          </Link>
          <Link
            onClick={toggleAccordion}
            smooth={true}
            duration={800}
            to="About"
          >
            RoadMap
          </Link>
          <Link
            onClick={toggleAccordion}
            smooth={true}
            duration={800}
            to="Mint"
          >
            About Us
          </Link>
          <Link
            onClick={toggleAccordion}
            smooth={true}
            duration={800}
            to="RoadMap"
          >
            About Us
          </Link>
          <Link onClick={toggleAccordion} smooth={true} duration={800} to="FAQ">
            FAQ
          </Link>
          <div className="external-links">
            <a className="twitter" href="/">
              <FaTwitter />
            </a>
            <a className="discord" href="/">
              <FaDiscord />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
