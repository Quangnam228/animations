import React from "react";
import styled from 'styled-components';
import bg from '../img/bg.svg';
import Navigation from "./Navigation";
import HerderContent from './HerderContent';

function Header() {
    return (
      <HeaderStyled>
          <div className="headerContent">
            <Navigation />
            <HerderContent />
          </div>
      </HeaderStyled>
    );
}

const HeaderStyled = styled.header`
    height: 100vh;
    width: 100%;
    background-image:url(${bg});
    background-repeat:no-repeat;
    background-size: cover;
    background-position-y: 100%;
    .headerContent{
      padding: 0 18rem;
      @media screen and (max-width: 1347px){
        padding: 5rem 14rem;
      }
      @media screen and (max-width: 1186px){
        padding: 5rem 8rem;
      }
      @media screen and (max-width: 990px){
        padding: 5rem 4rem;
      }
      @media screen and (max-width: 730px){
        padding: 5rem 2rem;
      }
    }
`

export default Header;
  