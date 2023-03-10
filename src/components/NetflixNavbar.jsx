import { Navbar } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import NavLogo from "../assets/netflix_logo.png";
import ProfilePicture from "../assets/avatar.png";
import { Link, useLocation } from "react-router-dom";
import Form from "react-bootstrap/Form";

const NetflixNavbar = () => {
  const location = useLocation();

  return (
    <Navbar collapseOnSelect expand="lg" variant="dark" className="color-nav">
      <Navbar.Brand href="#home">
        {" "}
        <img className="logo" src={NavLogo} alt="logo"></img>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Link to="/backoffice" className="nav-link">
            <div
              className={
                location.pathname === "/backoffice"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Backoffice
            </div>
          </Link>

          <Link to="/tv-shows" className="nav-link">
            <div
              className={
                location.pathname === "/tv-shows"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              TV Shows
            </div>
          </Link>
        </Nav>
        <Nav className="ml-auto d-flex align-items-center">
          <Form.Control
            placeholder={
              location.pathname === "/tv-shows" && "Search in TV Shows…"
            }
          />
          <Nav.Link>
            <i className="bi bi-search"></i>
          </Nav.Link>
          <Nav.Link>KIDS</Nav.Link>
          <Nav.Link>
            <i className="bi bi-bell-fill"></i>
          </Nav.Link>
          <Nav.Link className="pr-0 mr-4 d-none d-md-block">
            {" "}
            <div className="d-flex">
              <img src={ProfilePicture} alt="avatar" className="avatar"></img>
              <i className="bi bi-caret-down-fill mt-2 ml-1 mr-1"></i>
            </div>{" "}
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
export default NetflixNavbar;
