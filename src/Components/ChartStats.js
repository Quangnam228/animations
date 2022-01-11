import React from 'react'
import styled from 'styled-components';

function ChartStats({ name, amount }) {
    return (
        <ChartStatsStyled>
            <p>{name}</p>
            <h4>{amount}</h4>
        </ChartStatsStyled>
    )
}


const ChartStatsStyled = styled.div`
  background-color: var(--white-color);
  border-radius:50px;
  border: 1px solid var(--border-colour);
  height: 8rem;
  width: 12rem;
  padding: 1.5rem;
  box-shadow: 0px 25px 50px rgba(22,23,79, 0.05);
  h4{
      font-size: 2rem;
      color: var(--purple-primary);
  }
  p{
      color: black;
  }
`;
export default ChartStats
