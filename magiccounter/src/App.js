import React from 'react';

import './App.css';
import TopBar from './Components/topbar/topbar';
import PlaySlot1 from './Components/playslot1/playslot1.js';
import Timer from './Components/timer/timer.js';
import PlaySlot2 from './Components/playslot2/playslot2.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TopBar />
      </header>
      <section className="flex">
        <PlaySlot1 />
        <Timer />
        <PlaySlot2 />
      </section>
    </div>
  );
}

export default App;
