import BNavbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import logo from "../assets/imgs/stackline_logo.svg";

const Navbar = () => (
  <BNavbar bg="dark">
    <Container>
      <BNavbar.Brand href="#">
        <img
          src={logo}
          width="150"
          className="d-inline-block align-top"
          alt="logo"
        />
      </BNavbar.Brand>
    </Container>
  </BNavbar>
);

export default Navbar;
