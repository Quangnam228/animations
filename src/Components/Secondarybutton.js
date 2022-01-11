import React from 'react'
import styled from 'styled-components';
import arrow from '../img/arrow.svg';


function Secondarybutton({ name }) {
    return (
        <SecondaryButtonStyle>
            {name}
            <img src={arrow} alt="" />
            
        </SecondaryButtonStyle>
    )
}

const SecondaryButtonStyle = styled.button`
    background-color: var(--dark-primary);
    padding: 0.7rem 1.8rem;
    font-family: inherit;
    font-size: inherit;
    color: inherit;
    border-radius: 20px;
    outline: none;
    border: none;
    cursor: pointer;
    display: flex;
    align-items : center;
    justify-content: space-between;
    img{
        padding-left: 0.9rem;
    }
`;

export default Secondarybutton;
