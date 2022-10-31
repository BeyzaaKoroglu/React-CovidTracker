import React from "react";
import { Styled } from "./Header.styled";

const Header = () => {
  return (
    <Styled>
      <h1>
        C
        <img
          src={"https://www.cnjg.org/sites/default/files/coronavirus_0.png"}
          alt=""
        />
        VID-19
      </h1>
      <h3>Global and Country Cases of Corona Virus</h3>
      <i>(For a Particlar select a Country from below)</i>
    </Styled>
  );
};

export default Header;
