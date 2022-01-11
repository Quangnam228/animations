import React from 'react'
import styled from 'styled-components';
import { InnerLayout } from '../styles/Layouts';
import lines from '../img/lines.svg';
import questions from '../questions';
import Question from './Question';

function FAQSection() {
    return (
        <FAQSectionStyle>
            <InnerLayout>
                <h3 className="small-heading">Frequently <span>asked questions</span></h3>
                <p className="c-para">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                    Assumenda maxime ipsa nam expedita dolorem distinctio illo 
                    ad doloribus atque fuga, Nihil laboriosam beatae fugit.
                </p>
                {/* <div className="lines">
                    <img src={lines}  alt=""/>
                </div> */}
                <div className="questions-cpn">
                    {
                        questions.map(q =>{
                            return <Question key={q.id} {...q} />
                        })
                    }
                </div>
            </InnerLayout>
        </FAQSectionStyle>
    )
}

const FAQSectionStyle = styled.section`
    .c-para{
        width: 60%;
        margin: 0 auto;
    }
    .questions-con{
        padding-top: 3rem;
    }
    .lines{
        position absolute;
        left: 0;
        top: 340%;
        width:100%;
        z-index: -1;
        img{
            width: 100%;
        }
    }
`;

export default FAQSection
