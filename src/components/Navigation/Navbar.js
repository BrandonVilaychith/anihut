import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.nav`
  color: #fff;
  background-color: #1788ca;
  padding: 10px 0;
  .links {
    /* border: 1px solid green; */
    width: 300px;
    display: flex;
    justify-content: space-between;
  }
`;

const Container = styled.div`
  /* border: 1px solid red; */
  width: 80%;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #fff;
  font-size: 2em;
  border: none;
  &::after {
    content: "";
    display: block;
    border-bottom: 3px solid #fff;
    width: 0;
    right: 0;
    -webkit-transition: 0.1s ease;
    transition: 1s ease;
  }
  &:hover:after {
    width: 100%;
  }
`;

const Title = styled.h1`
  font-size: 5em;
  text-transform: uppercase;
`;

const Navbar = () => {
  return (
    <Nav>
      <Container>
        <Title>Anihut</Title>
        <div className="links">
          <StyledLink to="/">Anime</StyledLink>
          <StyledLink to="/">Manga</StyledLink>
          <StyledLink to="/">Sign In</StyledLink>
        </div>
      </Container>
    </Nav>
  );
};

export default Navbar;
