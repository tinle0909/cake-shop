import React from "react";

function CardImage({ img }) {
  return (
    <div
      style={{
        borderRadius: "10px",
        width: "200px",
        height: "200px",
      }}
    >
      <img
        src={img}
        title="cake"
        width={200}
        height={200}
        style={{
          borderRadius: "10px",
          objectFit: "contain",
        }}
      />
    </div>
  );
}

export default CardImage;
