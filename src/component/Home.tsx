import React from "react";
import image from "./img.jpg";
import Svg from "./svg.svg";
import StyledDiv from "./styles";

export default function Home() {
  return (
    <StyledDiv>
      <h1>Hello Parcel SSR</h1>
      <img src={image} />
      <Svg />
    </StyledDiv>
  );
}
