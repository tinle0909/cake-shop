import React from "react";

function PrimaryInput({ placeholder, color, background, type = "text" }) {
  return (
    <div>
      <input
        style={{
          color: color,
          backgroundColor: background,
          fontSize: "18px",
        }}
        placeholder={placeholder}
        type={type}
      />
    </div>
  );
}

export default PrimaryInput;
