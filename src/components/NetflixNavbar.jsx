import { Navbar } from "react-bootstrap"
import { Nav } from "react-bootstrap"
import NavLogo from '../assets/netflix_logo.png'
import ProfilePicture from '../assets/avatar.png'

const NetflixNavbar = () => {

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="#home"> <img className="logo" src={NavLogo} alt="logo"></img></Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
        <Nav className="ml-auto">
          <Nav.Link><i className="bi bi-search"></i></Nav.Link>
          <Nav.Link>KIDS</Nav.Link>
          <Nav.Link><i className="bi bi-bell-fill"></i></Nav.Link>
          <Nav.Link className="pr-0 mr-4"> <img src={ProfilePicture} alt="avatar" className="avatar"></img><i className="bi bi-caret-down-fill"></i></Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>





  )
}
export default NetflixNavbar
