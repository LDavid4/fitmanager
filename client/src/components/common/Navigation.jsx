import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <Navbar fixed="top" expand="lg" className="navbar-custom">
      <Container>
        <Navbar.Brand as={Link} to="/" className="text-white fw-bold d-flex align-items-center">
          <span className="fs-3 me-2 gradient-text">⚡</span>
          <span className="fs-4 gradient-text">Teretana</span>
          <span className="fs-5 text-muted ms-1">Elite</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="border-0 shadow-none">
          <i className="bi bi-list text-white fs-2"></i>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link as={Link} to="/">Početna</Nav.Link>
            <Nav.Link as={Link} to="/memberships">Članarine</Nav.Link>
            <Nav.Link as={Link} to="/schedule">Raspored</Nav.Link>
            <Nav.Link as={Link} to="/trainers">Naši Treneri</Nav.Link>
          </Nav>
          <Nav className="ms-auto align-items-center">
            <Nav.Link as={Link} to="/login" className="me-3">Prijavi Se</Nav.Link>
            <Button as={Link} to="/register" className="btn-primary-glow">
              Pridruži Se
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
