import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

function DarkMode({ dark, setDark }) {
  // Define the base className for the header depending on the dark state
  const headerClassName = dark ? 'header dark-mode' : 'header light-mode';

  return (
    // Use the dynamic headerClassName for the <header> element
    <header className={headerClassName}>
      {/* Removed repetitive div with hardcoded "header" class */}
      <span>ここはheaderです。</span>
      <Navbar>
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/" className="nav-link-custom">HOME</Nav.Link>
          <Nav.Link as={Link} to="/todo" className="nav-link-custom">todo</Nav.Link>
          <Nav.Link as={Link} to="/colorSwitcher" className="nav-link-custom">ColorSwitcher</Nav.Link>
          <Nav.Link as={Link} to="/searchFilter" className="nav-link-custom">SearchFilter</Nav.Link>
          <Nav.Link as={Link} to="/Field" className="nav-link-custom">Field</Nav.Link>
          <Nav.Link as={Link} to="/Count" className="nav-link-custom">Count</Nav.Link>
        </Nav>
      </Navbar>
      <button onClick={() => setDark(!dark)}>{dark ? "light-mode" : "dark-mode"}</button>
    </header>
  );
}

export default DarkMode;
