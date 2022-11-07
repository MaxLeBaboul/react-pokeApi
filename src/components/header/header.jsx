import React from "react";
import { LinkContainer } from "react-router-bootstrap";
import { Navbar, Container } from "react-bootstrap";

const Header = () => {
  return (
    <div>
      <Navbar bg="dark" variant="lg" collapOnSelect>
        <Container>
          <LinkContainer style={{ color: "white" }} to="/">
            <Navbar.Brand>Home PokéApi</Navbar.Brand>
          </LinkContainer>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
