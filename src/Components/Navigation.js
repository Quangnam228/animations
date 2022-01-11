import React from 'react'
import styled from 'styled-components';
import PrimaryButton from './PrimaryButton';
import logo from '../img/logo.svg';

function Navigation() {
    return (
        <NavigationStyle>
            <div className="logo">
                <img src={logo} />
            </div>
            <ul>
                <li>
                    <a href="">Home</a>
                </li>
                <li>
                    <a href="">Features</a>
                </li>
                <li>
                    <a href="">Pricing</a>
                </li>
            </ul>
            <PrimaryButton name={'Sign Up'}/>
            
        </NavigationStyle>
    )
}

const NavigationStyle = styled.nav`
    display: flex;
    justify-content: space-between;
    min-height:10vh;
    align-items: center;

    ul{
        display: flex;
        justify-content: space-between;
        width: 40%;
    }
`;
export default Navigation
