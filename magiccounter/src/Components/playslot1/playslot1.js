import React from 'react';

// let [player1name, setPlayer1name] = state [];

const Name = `
`;

const Life = `
`;

function PlaySlot1() {
    return (
      <div className="ps1-container">
        <Name>
          <p>Name</p>         
        </Name>
        <Life>
          <p>Life</p>
          
          <p>-1  | -5</p>
          <p>+1  | +5</p>
        </Life>

      </div>
    );
  }
  
  export default PlaySlot1;