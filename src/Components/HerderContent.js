import React from 'react'
import styled from 'styled-components';
import Secondarybutton from './Secondarybutton';
import phone from '../img/phone.svg';
import ring1 from '../img/ring_orange.svg';
import message1 from '../img/message_pink.svg';
import message2 from '../img/message_blue.svg';

function HerderContent() {
    return (
        <HerderContentStyled>
            <div className="left-content">
                <div className="left-text-content">
                    <h1>Smart banking for freelancers</h1>
                    <p className="white">
                        lorem ipsum dolor sit amet consectetur, consectetur adipiscing elit. Velit molestie minus dictx commondi corporis quos odio libero temporibus, eveniet nist
                    </p>
                    <Secondarybutton  name="Register Now"/> 
                </div>
            </div>
            <div className="right-content">
                <img src={phone} alt="" className="phone"/>
                <img src={ring1} alt="" className="ring1"/>
                <img src={message1} alt="" className="message1"/>
                <img src={message2} alt="" className="message2"/>
            </div>
        </HerderContentStyled>
    )
}

const HerderContentStyled = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    padding-top: 2rem;
    @media screen and (max-width: 700px){
        grid-template-columns: repeat(1, 1fr);
    }
    .left-content{
        display: flex;
        align-items: center;
        padding-right: 3rem;
        .white {
            color: var(--white-color);
        }
        h1{
            font-size: 3rem;
            font-weight: 500;
            @media screen and (max-width: 1347px){
                font-size: 2.8rem;
                font-weight: 450;
              }
              @media screen and (max-width: 1186px){
                font-size: 2.5rem;
                font-weight: 450;
              }
              @media screen and (max-width: 990px){
                font-size: 2rem;
                font-weight: 400;
              }
              @media screen and (max-width: 730px){
                font-size: 2rem;
                font-weight: 400;
              }
        }

        .white{
            padding: 0.5rem 0;
            line-height: 1.5rem;
        }
    }
    .right-content{
        position: relative;
        display: flex;
        justify-content: center;
        .phone{
            width: 85%;  
        }
        .ring1{
            width: 90px;
            position: absolute;
            bottom: 10%;
            right: 0;
            left: auto;
            animation: move2 20s infinite;
            transition: all .4s ease-in-out;
        }
        .message1{
            width: 120px;
            position: absolute;
            top: 0;
            right: 0;
            left: auto;
            animation: move 5s infinite;
            transition: all .4s ease-in-out;
        }
        .message2{
            width: 120px;
            position: absolute;
            bottom 15%;
            left: 0;
            animation: move 8s infinite;
            transition: all .4s ease-in-out;
        }
        // Header animations
        .message1{
            @keyframes move{
                0%{
                    transform: translateY(0) rotate(0) scale(1) translateX(0);
                }
                50%{
                    transform: translateY(-10px) rotate(20deg) scale(1.1) translateX(10px);
                }
                100%{
                    transform: translateY(0) rotate(0deg) scale(1) translateX(0);
                }
            }
            @keyframes move2{
                0%{
                    transform: translateY(0) rotate(0) scale(1) translateX(0);
                }
                50%{
                    transform: translateY(-10px) rotate(60deg) scale(1.1) translateX(10px);
                }
                100%{
                    transform: translateY(0)  rotate(0deg) scale(1) translateX(0);
                }
            }
        }
    }
`;
export default HerderContent
