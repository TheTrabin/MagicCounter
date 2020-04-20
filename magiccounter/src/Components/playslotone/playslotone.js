import React, { useState } from 'react';
import styled from 'styled-components';
import { Button } from 'reactstrap';
import {FaPen} from 'react-icons/fa';

//styles
const PS1 = styled.div`
border: solid 3px gold;
width: 300px;
height: 300px;
background: limegreen;
`;

const Name = styled.div`
border: solid 1px black;
display:flex;
flex-direction: row;
justify-content: space-evenly;
`;

const Life = styled.div`
border: solid 1px black;
`;
const Bone = styled.div`
display:flex;
border: solid 1px black;
justify-content: space-evenly;
`;
const Btwo = styled.div`
display:flex;
border: solid 1px black;
justify-content: space-evenly;
`;

const Counter = styled.h1`
color: green;
`;
//function

function PlaySlot1() {
//nameing function state grab
  let [ps1name, setPs1Name] = useState('First Player')
  const p1Name = e => {setPs1Name(prompt('First Player Name'))}
  //initial state for life
  const [ps1Life, setPs1Life ] = useState(20);

    return (
      <PS1>
        <Name>
          <h2>{ps1name}</h2>
          <Button onClick={p1Name}><FaPen /></Button>         
          </Name>
        <Life>
          <h3>Life</h3>
          <Counter>{ps1Life}</Counter>
          <Bone>
          <Button onClick = {() => setPs1Life(ps1Life - 1)}>-1</Button><Button onClick = {() => setPs1Life(ps1Life - 5)}>-5</Button>
          </Bone>
          <Btwo>
          <Button onClick = {() => setPs1Life(ps1Life + 1)}>+1</Button><Button onClick = {() => setPs1Life(ps1Life + 5)}>+5</Button>
          </Btwo>
        </Life>

      </PS1>
    );
  }
  
  //output

  export default PlaySlot1;