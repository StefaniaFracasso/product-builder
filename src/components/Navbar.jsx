import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";

const Header = () => {
  const selectedSection = useSelector((state) => state.section.selectedSection);
  const selectedCar = useSelector((state) => state.car.selectedCar);
  const dispatch = useDispatch();

  const handleSelectSection = (section) => {
    if (selectedCar) {
      dispatch({
        type: "SELECT_SECTION",
        payload: section,
      });
    }
  };

  return (
    <Navbar
      className="custom-navbar d-none d-lg-block"
      variant="light"
      expand="lg"
    >
      <Navbar.Toggle aria-controls="navbar-nav" />
      <Navbar.Collapse id="navbar-nav">
        <Nav className="mx-auto">
          <Nav.Link
            className="custom-nav-link"
            active={selectedSection === "models"}
            onClick={() => handleSelectSection("models")}
          >
            MODELS
          </Nav.Link>
          <Nav.Link
            className="custom-nav-link"
            active={selectedSection === "colors"}
            onClick={() => handleSelectSection("colors")}
            disabled={!selectedCar}
          >
            COLORS
          </Nav.Link>
          <Nav.Link
            className="custom-nav-link"
            active={selectedSection === "accessories"}
            onClick={() => handleSelectSection("accessories")}
            disabled={!selectedCar}
          >
            ACCESSORIES
          </Nav.Link>
          <Nav.Link
            className="custom-nav-link"
            active={selectedSection === "summary"}
            onClick={() => handleSelectSection("summary")}
            disabled={!selectedCar}
          >
            SUMMARY
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
