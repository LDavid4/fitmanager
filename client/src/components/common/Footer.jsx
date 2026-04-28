import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer-section">
      <Container>
        <Row className="gy-4 text-center text-md-start">
          <Col md={4}>
            <div className="fw-bold d-flex align-items-center justify-content-center justify-content-md-start mb-3">
              <span className="fs-4 gradient-text">⚡</span>
              <span className="fs-5 gradient-text mx-2">Teretana</span>
              <span className="fs-6 text-muted">Elite</span>
            </div>
            <p className="text-muted small w-md-75">
              Glavna fitnes destinacija za one koji traže izuzetnost i brz napredak.
            </p>
          </Col>
          <Col md={4}>
            <h5 className="text-white mb-3">Navigacija</h5>
            <ul className="list-unstyled d-flex flex-column gap-2 text-muted small">
              <li><Link to="/" className="text-decoration-none text-muted nav-hover text-white-hover">Početna</Link></li>
              <li><Link to="/memberships" className="text-decoration-none text-muted nav-hover text-white-hover">Članarine</Link></li>
              <li><Link to="/schedule" className="text-decoration-none text-muted nav-hover text-white-hover">Raspored Treninga</Link></li>
              <li><Link to="/login" className="text-decoration-none text-muted nav-hover text-white-hover">Korisnički Portal</Link></li>
            </ul>
          </Col>
          <Col md={4}>
            <h5 className="text-white mb-3">Kontakt</h5>
            <ul className="list-unstyled text-muted small d-flex flex-column gap-2">
              <li><i className="bi bi-geo-alt me-2 text-primary"></i> Trg Zdravlja 12, Fitnes Grad</li>
              <li><i className="bi bi-envelope me-2 text-primary"></i> info@teretanaelite.rs</li>
              <li><i className="bi bi-telephone me-2 text-primary"></i> +381 (0)11 123 4567</li>
            </ul>
          </Col>
        </Row>
        <div className="border-top border-secondary mt-4 pt-3 text-center text-muted small" style={{ opacity: 0.5 }}>
          © {new Date().getFullYear()} Teretana Elite. Sva prava zadržana.
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
