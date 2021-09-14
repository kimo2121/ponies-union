import React, { useEffect } from "react";
import "./home.css";
import unicorn from "../../assets/images/unicorn.png";
import About from "../../components/About/About";
import Timer from "../../components/Timer/Timer";
import Gallery from "../../components/Gallery/Gallery";
import RoadMap from "../../components/RoadMap/RoadMap";
import OurTeam from "../../components/OurTeam/OurTeam";
import CustomizedAccordions from "../../components/FAQ/FAQ";
import Disclaimer from "../../components/Disclaimer/Disclaimer";
import AOS from "aos";
import "aos/dist/aos.css";
import Perks from "../../components/Perks/Perks";

const Home: React.FC = () => {
  useEffect(() => {
    AOS.init({
      // duration: 1400,
    });
  }, []);
  return (
    <div className="home">
      <div className="banner">
        <h1 data-aos="slide-right" data-aos-duration="500">
          Welcome to The Ponies Union
        </h1>
        <img src={unicorn} alt="" />
        <p data-aos="zoom-in" data-aos-duration="500">
          Welcome to The Poniez Union, the place to be if you are considering
          becoming a Poniez collector, already a seasoned Poniez connoisseur or
          anything in between.{" "}
        </p>
        <p data-aos="zoom-in" data-aos-duration="500">
          Lets get straight to the point, you are skeptical and wondering who
          are The Poniez and what is The Poniez Union? Another pixelated, cute,
          slightly fuzzy animal?! We know what you're thinking, we were thinking
          the same thing too. But then we thought more about it, pixels are fun
          and a nice reminder of the past when MS Paint was the app of choice,
          and ponies, well what’s not to like about ponies? So we sat down and
          started thinking, talking, imbibing, and having fun. What happened
          after is now history. The Poniez were born
        </p>
        <p data-aos="zoom-in" data-aos-duration="500">
          The Poniez Union is the official clubhouse for all Poniez collectors,
          wether you have 1 or 100, you’re always welcome here
        </p>
        <p data-aos="zoom-in" data-aos-duration="500">
          But back to the first question, why more pixel art?! We really don't
          have the answer you are looking for and maybe this is not the right
          place for you if you’re still asking that question, which is totally
          cool, and maybe you will become a collector in the future :) What we
          can tell you is that these little guys are funky, they will look great
          as your twitter/instagram avatar, they all have some fun traits and
          generally they should put a smile on your face
        </p>
        <p data-aos="zoom-in" data-aos-duration="500">
          Check out the FAQ below, it should answer most housekeeping questions
          related to the technical aspects, minting etc. The Poniez roadmap is
          also right below and it points out some fun milestones and plans for
          the future. Want to know a secret? The future looks better with Poniez
        </p>
      </div>
      {/* <About /> */}
      <Timer mintStartAt={1633138400} />
      {/* <Gallery /> */}
      <Perks />
      <RoadMap />
      <div className="faq-section">
        <h1>FAQs</h1>
        <div className="question-container">
          <CustomizedAccordions />
        </div>
      </div>
      <OurTeam />
      {/* <Disclaimer /> */}
    </div>
  );
};

export default Home;
