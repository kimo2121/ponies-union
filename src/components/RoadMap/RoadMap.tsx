import React, { useEffect } from "react";
import "./roadMap.css";
import { ReactComponent as Diamond } from "../../assets/icons/diamond.svg";
import { ReactComponent as Contract } from "../../assets/icons/contract.svg";
import { ReactComponent as Download } from "../../assets/icons/download.svg";
import AOS from "aos";
import "aos/dist/aos.css";
const RoadMap: React.FC = () => {
  useEffect(() => {
    AOS.init({
      // duration: 1400,
    });
  }, []);
  return (
    <div className="road-map">
      <h1>RoadMap</h1>
      <div
        data-aos="slide-up"
        data-aos-duration="800"
        className="container-internal-nav"
      >
        <div className="internal-nav">
          <div>
            <h1>Make a Profile</h1>
            <span>
              A mobile landing page is the important and essentials amount
              product
            </span>
          </div>
        </div>
        <div className="internal-nav">
          <div>
            <h1>Download it for free</h1>
            <span>
              A mobile landing page is the important and essentials amount
              product
            </span>
          </div>
        </div>
        <div className="internal-nav">
          <div>
            <h1>Enjoy this App</h1>
            <span>
              A mobile landing page is the important and essentials amount
              product
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoadMap;
