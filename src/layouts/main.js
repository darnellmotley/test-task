import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Navbar from "./navbar";
import Sidebar from "./sidebar";

const MainLayout = (props) => (
  <Container fluid>
    <Navbar />
    <Row>
      <Col md={3}>
        <Sidebar />
      </Col>
      <Col md={9}>{props.children}</Col>
    </Row>
  </Container>
);

export default MainLayout;
