import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';

const NetflixNavbar = () => (
  <Navbar collapseOnSelect expand="md" data-bs-theme="dark">
    <Container fluid>
      <Navbar.Brand href="#home">
        <img
          src="/assets/images/logo.png"
          style={{ width: '100px', height: '55px' }}
          alt="netflix logo"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#tv-shows">TV Shows</Nav.Link>
          <Nav.Link href="#movies">Movies</Nav.Link>
          <Nav.Link href="#recently-added">Recently Added</Nav.Link>
          <Nav.Link href="#list">My List</Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link href="#search">
            <i className="bi bi-search"></i>
          </Nav.Link>
          <Nav.Link href="#kids" className="fw-bold">
            KIDS
          </Nav.Link>
          <Nav.Link href="#search">
            <i class="bi bi-bell icons"></i>
          </Nav.Link>
          <Nav.Link href="#search">
            <i class="bi bi-person-circle icons"></i>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default NetflixNavbar;
