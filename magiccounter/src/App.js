import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab, fa } from '@fortawesome/free-brands-svg-icons';
import './App.css';

import TopBar from './Components/topbar/topbar.js';
import PlaySlot1 from './Components/playslotone/playslotone.js';
import Timer from './Components/timer/timer.js';
import PlaySlot2 from './Components/playslot2/playslot2.js';
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'

library.add(fab, faCheckSquare, faCoffee)


const Counter = styled.div`
color: white;
background: black;
display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;
function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <TopBar />
      </header>
      <Counter>
         <PlaySlot1 />
        <Timer />
        <PlaySlot2 />
      </Counter>
    </div>
  );
}

export default App;
