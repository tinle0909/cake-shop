import React, { useState } from "react";
import styled from "styled-components";

function PrimaryButton({
  onClick,
  text = "Button",
  background,
  colorText,
  className,
  colorTextHover,
  backgroundHover,
}) {
  const BtnPrimary = styled.button`
  color: ${colorText};
  background: ${background};
  border: solid 1px ${background};
  transition: all 0.5s;
  &:hover{
    backgroundColor: ${backgroundHover},
    color: ${colorTextHover},
    border: solid 1px ${colorTextHover},
  }
  `;

  const [isHover, setIsHover] = useState(false);
  return (
    <BtnPrimary
      className={`inline-flex items-center justify-center px-8 py-4 font-sans font-semibold tracking-wide text-white bg-blue-500 rounded-lg h-[60px] ${className}`}
      onClick={onClick}
      // onMouseEnter={() => setIsHover(true)}
      // onMouseLeave={() => setIsHover(false)}
      // style={
      //   isHover
      //     ? {
      //         backgroundColor: backgroundHover,
      //         color: colorTextHover,
      //         border: `solid 1px ${colorTextHover}`,
      //       }
      //     : {
      //         color: colorText,
      //         background: background,
      //         border: `solid 1px ${background}`,
      //       }
      // }
    >
      {text}
    </BtnPrimary>
  );
}

export default PrimaryButton;
