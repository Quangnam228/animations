import React from 'react'
import styled from 'styled-components';
import {InnerLayout } from '../styles/Layouts';
import card from '../img/creditcard.svg'
function CardSection() {
    return (
        <CardSectionStyle>
            <InnerLayout>
                <div className="card-container">
                    <div className="card-left">
                        <h2 className="secondary-heading">
                            One card for all your paymants
                        </h2>
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adpisicing elit. Des voluptatum laudantium quo harum, adipisci tenetur eum.
                        </p>
                    </div>
                    <div className="card-right">
                        <img src={card} alt="" />
                    </div>
                </div>
            </InnerLayout>
        </CardSectionStyle>
    )
}

const CardSectionStyle = styled.section`
    .card-container{
        display: grid;
        grid-template-columns: repeat(2,1fr);
        @media screen and (max-width: 845px){
            grid-template-columns: repeat(1, 1fr);
        }
        .card-right{
            display: flex;
            justify-content: flex-end;
        }
        .card-left{
            p{
                padding: 1rem 0;
            }
        }
    }
`;
export default CardSection
