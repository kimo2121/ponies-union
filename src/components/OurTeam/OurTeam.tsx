import React, { useEffect } from "react";
import "./ourTeam.css";
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { AiOutlineGoogle } from "react-icons/ai";
import team_5 from "../../assets/images/team_5.jpg";
import team_11 from "../../assets/images/team_11.jpg";
import team_17 from "../../assets/images/team_17.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
const OurTeam: React.FC = () => {
  useEffect(() => {
    AOS.init({
      // duration: 1400,
    });
  }, []);
  return (
    <div className="our-team">
      <h1>Meat Our Team</h1>
      <p>
        The Poniez are a cool, inclusive, and a very worldwide bunch. Much like
        the team involved in bringing them to you now. The Poniez team is
        comprised of a few people here and a few people there. The US, the UK,
        Southeast Asia, like we said at the start..a worldwide bunch :)
      </p>
      <p>
        The Poniez Commander in Chief is the guy who has brought it all
        together. Feel free to reach out to him on Twitter or email him
        poniezcommander@poniezunion.com
      </p>
      <div className="our-team-inner">
        <div className="members-container">
          <div
            data-aos="slide-right"
            data-aos-duration="800"
            className="members"
          >
            <img src={team_5} alt="" />
            <h2>Harrison Hudson</h2>
            <p>WordPress Dev</p>
          </div>
          <div className="members">
            <img src={team_11} alt="" />
            <h2>Elizabeth Sofia</h2>
            <p>WordPress Dev</p>
          </div>
          <div
            data-aos="slide-left"
            data-aos-duration="800"
            className="members"
          >
            <img src={team_17} alt="" />
            <h2>Lucy Evelyn</h2>
            <p>Ui/UX Designer</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
