import React from 'react';
import c1 from '../images/ACCGroup.jpg';
import c2 from '../images/TAMLogo.jpg';
import c3 from '../images/mdwlogo.jpg';
import c4 from '../images/Aflac.png';

export default function Companies() {
  
    return (
      <nav id="Project" className="main-header-menu">
          <section style={{
              display: 'flex',
              flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'flex-start',
          }}>
          <h1>Companies I've Worked For:</h1>
          </section>
          
        <section
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            backgroundColor: 'lightblue',
          }}
        >
            <div style={{flex:1, flexDirection:'column', marginLeft: '200px'}}>
                <img src={c3} height="100" width="150" alt = "Missing"/>
            </div>
            <div style={{flex:1, flexDirection:'column'}}>
                <img src={c4} height="100" width="100" alt = "Missing"/>
                <div>
                </div>
            </div>
            <div style={{flex:1, flexDirection:'column'}}>
                <img src={c1} height="100" width="100" alt = "Missing"/>
            </div>
            <div style={{flex:1, flexDirection:'column'}}>
                <img src={c2} height="100" width="100" alt = "Missing"/>
            </div>
        </section>
      </nav>
    );
  }