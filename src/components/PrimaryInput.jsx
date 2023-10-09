import React from "react";

function PrimaryInput({
  placeholder,
  color,
  background,
  type = "text",
  value,
  onChange,
  className,
}) {
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
        value={value}
        onChange={(e) => onChange(e)}
        className={`primary-input ${className}`}
      />
    </div>
  );
}

export default PrimaryInput;
