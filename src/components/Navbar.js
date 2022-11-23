import React from 'react';
import MyPDF from '../images/CMoneyResume.pdf'

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
          <a href='https://cmoney574.github.io/myportfolio/'>Home</a>
        </div>
        <div style={linkStyle}>
        <a href='#Project'>Projects</a>
        </div>
        <div style={linkStyle}>
        <a href={MyPDF} download="CMoneyResume.pdf"> Resume </a>
        </div>
        <div style={linkStyle}>
        <a href='#contact'>Contact</a>
        </div>
      </section>
    </nav>
  );
}
