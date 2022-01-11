import React,{ useState } from 'react'
import styled from 'styled-components';
import plus from '../img/plus.svg';
import minus from '../img/minus.svg';
import {Fade} from 'react-reveal';

function Question({ title, description }) {

    const [toggle, setToggle] = useState(false);

    const handleToggler = () =>{
        setToggle(!toggle)
    }

    return (
        <Questionstyled>
            <Fade left cascade>
                <div className="q-con">
                    <div className="toggle-title">
                        <h4>{ title }</h4>
                        <button onClick={handleToggler}>
                        {toggle ? <img src={minus} alt="" /> : <img src={plus} alt="" />}
                        </button>
                    </div>
                    { toggle && <p>{ description }</p>}
                </div>
            </Fade>
        </Questionstyled>
    )
}

const Questionstyled = styled.div`
    .q-con{
        background-color: #fff;
        margin: 1rem 0;
        padding: 1rem 1rem;
        border-radius: 24px;
        transition: all .4s ease-in-out;
        box-shadow: 0px 25px 50px rgba (22, 25, 79, 0.05);
        .toggle-title{
            display: flex;
            align-items: center;
            transition: all .4s ease-in-out;
            justify-content: space-between;
            h4{
                color: #16194F;
                transition: all .4s ease-in-out;
                font-size: 1.1rem;
            }
            button{
                background: transparent;
                outline: none;
                cursor: pointer;
                border: none;
            }
        }
        p{
            transition: all .4s ease-in-out;
        }
    }
`;
export default Question
