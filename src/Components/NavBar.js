import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import ThemeButton from "./ThemeButton";
function NavBar(props) {
  return (
    <div>
      <Navbar
        collapseOnSelect
        expand="lg"
        className={props.value ? "light-theme" : "lightblack-theme"}
      >
        <Nav className="mr-auto">
          <h1 className={props.value ? "light-theme" : "lightblack-theme"}>
            Where in the world?
          </h1>
        </Nav>
        <Nav>
          <ThemeButton btnclick={props.btn} themeValue={props.value} />
        </Nav>
      </Navbar>
    </div>
  );
}

export default NavBar;
