import React from 'react';
import styled from 'styled-components';
import './topbar.css';
import { Button } from 'reactstrap';
import { FaGithub} from 'react-icons/fa';

function TopBar() {
    return (
      <div>
        <header className="top-header">
          <h1>MTG Life Counter</h1>
          <Button href="https://github.com/TheTrabin/MagicCounter">
              <FaGithub />
               <p>GitHub</p>
          </Button>
        </header>     
      </div>
    );
  }
  
  export default TopBar;