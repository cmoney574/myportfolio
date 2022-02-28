import React from 'react';

export default function Nav() {
  const linkStyle = { border: '1px black', padding: '5px' };

  return (
    <nav className="main-header-menu">
      <section
        style={{
          display: 'flex',
          fontFamily: 'helvetica',
          flexDirection: 'row',
          alignItems: 'flex-start',
          justifyContent: 'flex-start',
        }}
      >
        <div style={linkStyle}>
          Home
        </div>
        <div style={linkStyle}>
          Projects
        </div>
        <div style={linkStyle}>
          Resume
        </div>
        <div style={linkStyle}>
         About
        </div>
        <div style={linkStyle}>
          Contact
        </div>
      </section>
    </nav>
  );
}
