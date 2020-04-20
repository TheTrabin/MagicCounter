import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { fab } from '@fortawesome/free-brands-svg-icons';
import './topbar.css';
import { Button } from 'reactstrap';
import { FaGithub} from 'react-icons/fa';

const GitButton = styled.button`
display:flex;

`;


function TopBar() {
    return (
      <div>
        <header className="top-header">
          <h1>MTG Life Counter</h1>
          <Button GitButton={true} href="https://github.com/TheTrabin/MagicCounter">
              <FaGithub />
               GitHub
          </Button>
        </header>
        

      </div>
    );
  }
  
  export default TopBar;