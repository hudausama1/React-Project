import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from 'react-router-dom';
import { useTheme } from '../../Context/ThemeContext';
import { TiAdjustBrightness } from "react-icons/ti";
import { useNavigate } from 'react-router-dom';
import { Form, InputGroup, Button } from 'react-bootstrap';
import { FiSearch } from 'react-icons/fi';
import logo from '../../assets/logo.png';

function NavBar() {
  const { theme, toggleTheme } = useTheme();
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
      setSearchQuery('');
    }
  };

  return (
    <Navbar
      bg={theme === 'dark' ? 'dark' : 'light'}
      variant={theme === 'dark' ? 'dark' : 'light'}
      expand="lg"
    >
      <Container fluid>
        <Navbar.Brand href="/">
          <img
            src={logo}
            style={{
              height: "40px",
              width: "auto",
              marginRight: "10px",
              filter: theme === 'dark' ? 'invert(1)' : 'none'
            }}
            alt="Logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
            >
              Home
            </NavLink>
            <NavLink
              to="/products"
              className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
            >
              Movies
            </NavLink>
            <NavLink
              to="/favourites"
              className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
            >
              Favourites
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
            >
              Contact
            </NavLink>
            <NavLink
              to="/login"
              className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
            >
              Login
            </NavLink>
          </Nav>

          <Form onSubmit={handleSearch} className="d-flex mx-3" style={{ maxWidth: '500px' }}>
            <InputGroup>
              <Form.Control
                type="search"
                placeholder="Search movies..."
                aria-label="Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className={theme === 'dark' ? 'bg-dark text-light' : 'bg-light text-dark'}
              />
              <Button
                variant={theme === 'dark' ? 'outline-light' : 'outline-dark'}
                type="submit"
              >
                <FiSearch />
              </Button>
            </InputGroup>
          </Form>

          <button
            className="btn"
            onClick={toggleTheme}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              marginLeft: '10px'
            }}
          >
            <TiAdjustBrightness
              style={{
                fontSize: '1.5rem',
                color: theme === 'dark' ? '#ff0' : '#000',
                transition: 'color 0.3s ease'
              }}
            />
          </button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;