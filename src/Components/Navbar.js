import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import "./Navbar.css";
const App = () => {
  return (
    <div className="app">
      <Navbar variant="dark" >
        <Container >
          <Navbar.Brand href="#home">K-GARDEN BAR and RESTAURANT</Navbar.Brand>
          <Nav>
            <NavDropdown title="Home" id="collasible-nav-dropdown" >
              <NavDropdown.Item href="#action/3.1">Welcome</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Managemen</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Gallery</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Services" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Accomodation</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Restaurant</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Bar</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Washing Bay</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Leisure</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Offers</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#pricing">Testimonials</Nav.Link>
            <Nav.Link href="#pricing">About Us</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      
    </div>
  );
};

export default App;
