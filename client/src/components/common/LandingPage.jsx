import { Container, Row, Col, Button, Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <>
      <div className="hero-bg-shape"></div>
      
      {/* Hero Section */}
      <section className="hero-section">
        <Container>
          <Row className="align-items-center">
            <Col lg={7} className="animate-fade-up">
              <Badge bg="transparent" className="border border-primary text-primary px-3 py-2 rounded-pill mb-4 glass-panel">
                <i className="bi bi-star-fill me-2"></i> Premijum Iskustvo
              </Badge>
              <h1 className="hero-title">
                Pomeri Svoje <br/>
                <span className="gradient-text">Fizičke Granice</span>
              </h1>
              <p className="hero-subtitle">
                Pridruži se našem vrhunskom centru stvorenom za šampione.
                Najmodernija oprema, stručni treneri i zajednica koja te gura napred.
              </p>
              <div className="d-flex flex-wrap gap-3">
                <Button as={Link} to="/register" className="btn-primary-glow btn-lg px-5">
                  Započni Putovanje
                </Button>
                <Button as={Link} to="/memberships" className="btn-outline-glow btn-lg px-5">
                  Pogledaj Planove
                </Button>
              </div>
            </Col>
            
            <Col lg={5} className="d-none d-lg-block animate-fade-up" style={{ animationDelay: '0.2s' }}>
              <div className="glass-panel p-2 position-relative hover-lift">
                <img 
                  src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                  alt="Man working out" 
                  className="img-fluid rounded-4"
                  style={{ filter: 'brightness(0.85)' }}
                />
                
                {/* Floating stats card */}
                <div className="position-absolute glass-panel p-3 d-flex align-items-center mb-0" style={{ bottom: '-20px', left: '-20px' }}>
                  <div className="bg-primary rounded-circle d-flex align-items-center justify-content-center me-3" style={{ width: '45px', height: '45px' }}>
                    <i className="bi bi-lightning-charge-fill text-white fs-5"></i>
                  </div>
                  <div>
                    <h5 className="mb-0 fw-bold text-white">50+</h5>
                    <small className="text-muted">Treninga Nedeljno</small>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <Container>
          <div className="text-center mb-5 animate-fade-up">
            <h2 className="fw-bold fs-1 mb-3">Sve Što Vam Je Potrebno Za <span className="gradient-text">Uspeh</span></h2>
            <p className="text-muted max-w-75 mx-auto">Pružamo optimalno okruženje, alate i vođstvo za vaše fitnes ciljeve.</p>
          </div>
          
          <Row className="g-4">
            <Col md={4} className="animate-fade-up" style={{ animationDelay: '0.1s' }}>
              <div className="glass-panel feature-card hover-lift">
                <div className="feature-icon-wrapper">
                  <i className="bi bi-calendar-event"></i>
                </div>
                <h3 className="feature-title text-white">Fleksibilni Raspored</h3>
                <p className="feature-desc">
                  Jednostavno rezervišite grupne treninge preko svoje kontrolne table. Nikada ne propustite trening uz naš sistem dostupnosti u realnom vremenu.
                </p>
              </div>
            </Col>
            
            <Col md={4} className="animate-fade-up" style={{ animationDelay: '0.2s' }}>
              <div className="glass-panel feature-card hover-lift">
                <div className="feature-icon-wrapper">
                  <i className="bi bi-people"></i>
                </div>
                <h3 className="feature-title text-white">Stručni Treneri</h3>
                <p className="feature-desc">
                  Učite od najboljih. Naši sertifikovani treneri kreiraju specijalizovane rutine i prate vaš napredak kako bi osigurali maksimalne rezultate.
                </p>
              </div>
            </Col>

            <Col md={4} className="animate-fade-up" style={{ animationDelay: '0.3s' }}>
              <div className="glass-panel feature-card hover-lift">
                <div className="feature-icon-wrapper">
                  <i className="bi bi-credit-card"></i>
                </div>
                <h3 className="feature-title text-white">Lako Plaćanje</h3>
                <p className="feature-desc">
                  Sigurno kupite i obnovite članarinu online putem našeg integrisanog PayPal sistema plaćanja.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default LandingPage;
