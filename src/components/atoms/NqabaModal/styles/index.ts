import styled from "styled-components"
import { UniversalComponentPropsInterface } from "../../../../interfaces"
import { MediaQuery } from "../../../../utils"

export interface Props extends UniversalComponentPropsInterface<string> {
    open: boolean
}

export const BnB = styled.div<Props>`
    display: ${(props) => props.open ? "block" : 'none'};
    width: 100%;
    height: 100vh;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(255 255 255 / 96%);
    padding: .5rem;
    z-index: 300;
    overflow: auto;
    padding: 1rem;
    
    
    ${({ sx }) => sx};   
    
    /* @media (min-width: 600px) {
        ${({ sm }) => sm};    
        padding: 1rem;
    } */
    
    /* @media (min-width: 900px) {
        ${({ md }) => md};    
        padding: 2rem;
    }

    @media (min-width: 1200px) {
      ${({ lg }) => lg};    
    } */
    ${(props) => MediaQuery(props)}
`