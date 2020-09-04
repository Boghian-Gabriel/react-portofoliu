import React from "react";

import { useSpring, animated } from "react-spring";
import Button from "react-bootstrap/Button";
function CardInfo(props) {
  const style = useSpring({ opacity: 1, from: { opacity: 0 } });

  return (
    <animated.div className="g-card-info" style={style}>
      <p className="g-card-title">{props.title}</p>
      <p className="g-card-subtitle">{props.subtitle}</p>
      <Button
        variant="outline-primary"
        href={props.link}
        target="_black"
        rel="noopener noreferrer"
      >
        Vizualizează
      </Button>
    </animated.div>
  );
}

export default CardInfo;
