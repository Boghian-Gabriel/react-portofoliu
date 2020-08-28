import React from "react";

import CardInfo from "../components/CardInfo";

function Card(props) {
  return (
    <div
      className="d-inline-block g-card"
      onClick={(e) => props.onClick(props.item)}
    >
      <img
        className=" g-card-image"
        src={props.item.imageSrc}
        alt={props.item.imageSrc}
      />
      {props.item.selected && (
        <CardInfo
          title={props.item.title}
          subtitle={props.item.subtitle}
          link={props.item.link}
        />
      )}
    </div>
  );
}

export default Card;
