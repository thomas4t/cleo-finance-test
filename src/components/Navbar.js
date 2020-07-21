import React from "react";
import { Link } from "react-router-dom";

import styled from "styled-components";

const StyledNav = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  padding: 1vmin;
`;

const StyledLink = styled(Link)`
  padding: 10px 2vmin;
  text-decoration: none;
  color: #000;
  :hover {
    color: #fff;
    background-color: rgba(0, 0, 0, 0.7);
    border-radius: 5px;
  }
`;

const Navbar = (props) => {
  return (
    <StyledNav>
      <StyledLink to="/">
        <strong>Home</strong>
      </StyledLink>
      <StyledLink to="/userRepos">
        <strong>User repositories</strong>
      </StyledLink>
    </StyledNav>
  );
};

export default Navbar;
