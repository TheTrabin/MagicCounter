import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from 'styled-components';
import { Button } from 'reactstrap';
import {FaPen} from 'react-icons/fa';

//styles

const PS2 = styled.div`
border: solid 3px gold;
width: 300px;
height: 300px;
background: blue;
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

//function

function PlaySlot2() {
//rename state holding.
  let [ps2name, setPs2Name] = useState('Second Player')
  const p2Name = e => {setPs2Name(prompt('Second Player Name'))}


  //output of statements
    return (
      <PS2>
        <Name>
        <h2>{ps2name}</h2>
        <Button onClick={p2Name}><FaPen /></Button>         
          </Name>
          <Life>
          <h3>Life</h3>
          <p>counter</p>
          <Bone>
          <Button>-5</Button><Button>-1</Button>
          </Bone>
          <Btwo>
          <Button>+5</Button><Button>+1</Button>
          </Btwo>
          </Life>
        
      </PS2>
    );
  }
  
//output


  export default PlaySlot2;