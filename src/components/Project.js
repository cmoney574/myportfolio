import React from 'react';
import p1 from '../images/currencycompare.png'
import p2 from '../images/virtualpets.png'

export default function Project() {
  const linkStyle = { border: '1px black', padding: '5px' };

  return (
    <nav id="Project" className="main-header-menu">
        <section style={{
            display: 'flex',
            flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'flex-start',
        }}>
        <h1>Projects</h1>
        </section>
        
      <section
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          backgroundColor: 'lightblue',
        }}
      >
        <div style={linkStyle}>
          <a href="https://cmoney574.github.io/Currency-Comparisons/">
              <img src={p1} height="400" width="600" alt = "project"/>
          </a>
        </div>
        <div style={linkStyle}>
          <a href="https://virtualpets1234.herokuapp.com/">
              <img src={p2} height="400" width="600" alt = "project"/>
              </a>
        </div>
        {/* <div style={linkStyle}>
          <a href="#">Project 3</a>
        </div> */}
      </section>
    </nav>
  );
}
