import React, { useEffect } from "react";
import { FAQTypes } from "./types";
import "./FAQ.css";
import AOS from "aos";
import "aos/dist/aos.css";
const CustomizedAccordions: React.FC<FAQTypes> = () => {
  useEffect(() => {
    AOS.init({
      // duration: 1400,
    });
  }, []);
  return (
    <div data-aos="slide-right" data-aos-duration="500" className="faq-inner">
      <h1>Why should I care?</h1>
      <p>
        You are right, why should you care? The Poniez are another pixelated NFT
        collection that is similar to other pixelated works that have come
        before. There we said it. But no, really you should only care because
        being part of The Poniez Union is like being a part of a fun club. We
        have cool things planned for our future releases, and being a Poniez
        collector will get you ready for the fun things to come. Also The Poniez
        have fun eyes that if you catch them just right its like they are
        getting dolled up, ready to kick Covid to the curb and go for a night of
        fun and dancing
      </p>
      <div>
        <h1>Minting - How To Get Your Poniez</h1>
        <h3>When will Poniez be available?</h3>
        <p>
          HappyAddons is a unique collection of Addons to power up the Elementor
          Page Builder plugin. It works with the WordPress and Elementor Page
          Builder to customize your WordPress blog or Business sites.
        </p>
        <h3>How much are The Poniez?</h3>
        <p>Poniez season 1 are all priced at .0325 ETH + Gas.</p>
        <h3>Is there a limit to how many I can buy?</h3>
        <p>There is a limit of 10 Poniez per transaction. </p>
        <h3>What do I need?</h3>
        <p>
          You will need a Metamask Wallet with enough ETH to complete the
          purchase + the gas fees. If you need help with Metamask, check this
          link for a quick tutorial on how it works. You will need to connect
          your wallet by clicking the top right.
        </p>
        <h3>Can I mint from the contract directly?</h3>
        <p>Yes you can, the contract address is here</p>
      </div>
      <h1>What is planned for the future</h1>
      <p>
        The Poniez Union as you see it currently is quite good, its not great
        but its good. We have plans for some upgrades to The Poniez Union. The
        Poniez are a social bunch and like being around other people and other
        Poniez. Watch this space for
      </p>
      <h1>Is there a “Pre-Mint”</h1>
      <p>
        1-100 are being held back for two reasons. Firstly we want to reward the
        team for their hard work, they are excited to start their Poniez
        collection also. And secondly the majority of the 100 that are being
        held back will be for our giveaways and airdrops for the collectors !
      </p>
    </div>
  );
};
export default CustomizedAccordions;
