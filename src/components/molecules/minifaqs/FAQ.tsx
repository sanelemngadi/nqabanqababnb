import React, { useState } from 'react';
import styled from '@emotion/styled'
import { faqs } from '../../../../data';
import { projectColors, projectFonts } from '../../../styles/theme';
// import {Center} from "../../../styles"

const Accordion = styled.div`
  width: 90%;
  /* height: 256px; */
  padding: 0rem;
  margin: 0rem auto;
  /* background-color: blue; */
  border-radius: 6px;
`

const AccordionItem = styled.div`

`

const AccordionHeader = styled.p<{ header: boolean }>`
  width: 100%;
  /* height: 40px; */
  display: flex;
  justify-content: flex-start;
  align-items: center;
  cursor: pointer;
  font-family: ${projectFonts.primary};
  font-weight: 500;
  font-size: 18px;
  color: ${({ header }) => header ? projectColors.secondary : projectColors.primary};
  margin: 0.3rem 0;
  text-decoration: underline;
`

const AccordionBody = styled.div<{ show: boolean }>`
  height: ${({ show }) => show ? 'auto' : 0};
  overflow: ${({ show }) => show ? 'visible' : 'hidden'};
  visibility: ${({ show }) => !show && 'hidden'};
  width: 90%;
  text-align: left;
  align-items: center;
  background-color: #fcfcfcb7;
  padding: 0 1rem;
  padding: ${({ show }) => show ? '1rem' : '0 1rem'};
  font-family: ${projectFonts.primary};
  transition: all 300ms ease-out;
  /* transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms; */
`

const Radio = styled.input`
  display: none;

  &:checked ~ .div {
  max-height: 10rem;
  transition: max-height 0.5s ease-in-out;
}
`

const FAQ = () => {
    const [show, setShow] = useState('');
    const handleShow = (item: string) => {
        if (show === item) {
            setShow("");
        } else {
            setShow(item);
        }
    }
    return (
        <Accordion>
            {faqs.slice(0, 3).map((faq, idx) => (
                <AccordionItem key={'faq' + idx}>
                    <AccordionHeader
                        onClick={() => handleShow(idx.toString())}
                        header={idx.toString() === show}
                    >{faq.q}
                    </AccordionHeader>

                    <AccordionBody show={show === idx.toString()}>
                        {faq.a}
                    </AccordionBody>
                </AccordionItem>
            ))}
        </Accordion>
    )
}

export default FAQ;