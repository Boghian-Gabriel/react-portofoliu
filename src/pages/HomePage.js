import React from "react";

import Hero from "../../src/components/Hero";
import Carousel from "../../src/components/Carousel";

function HomePage(props) {
  return (
    <div>
      <Hero title={props.title} subtitle={props.subtitle} text={props.text} />
      <Carousel />
    </div>
  );
}

export default HomePage;
