import React from "react";
import { FAQTypes } from "./types";
import "./FAQ.css";

const CustomizedAccordions: React.FC<FAQTypes> = () => {
  return (
    <div className="faq-inner">
      <h1>What is HappyAddons & How does it Work?</h1>
      <p>
        HappyAddons is a unique collection of Addons to power up the Elementor
        Page Builder plugin. It works with the WordPress and Elementor Page
        Builder to customize your WordPress blog or Business sites.
      </p>
      <h1>What is HappyAddons & How does it Work?</h1>
      <p>
        HappyAddons is a unique collection of Addons to power up the Elementor
        Page Builder plugin. It works with the WordPress and Elementor Page
        Builder to customize your WordPress blog or Business sites.
      </p>
      <h1>What is HappyAddons & How does it Work? </h1>
      <p>
        HappyAddons is a unique collection of Addons to power up the Elementor
        Page Builder plugin. It works with the WordPress and Elementor Page
        Builder to customize your WordPress blog or Business sites.
      </p>
    </div>
  );
};
export default CustomizedAccordions;
