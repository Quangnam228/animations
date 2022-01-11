import React from 'react'
import styled from 'styled-components';
function PrimaryButton({name}) {
    return (
        <ButtonStyle>
            {name}
        </ButtonStyle>
    )
}

const ButtonStyle = styled.button`
    background-color: var(--accent-pink);
    padding: 0.7rem 1.8rem;
    font-family: inherit;
    font-size: inherit;
    color: inherit;
    border-radius: 20px;
    outline: none;
    border: none;
`;

export default PrimaryButton
