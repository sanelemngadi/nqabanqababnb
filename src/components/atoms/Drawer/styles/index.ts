import styled from "styled-components";
import { UniversalComponentPropsInterface } from "../../../../interfaces";


interface Props extends UniversalComponentPropsInterface<"top" | "left" | "right"> {
    open: boolean,
}


export const BnB = styled.div<Props>`
    display: ${(props) => props.open ? "block" : 'none'};
    width: 100%;
    height: 100vh;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(255 255 255 / 100%);
    padding: .5rem;
    z-index: 600;
    overflow: auto;

    transition: transform 0.5s ease-in-out;
    transform: ${(props) => props.open ? "translateY(0%)" : "translateY(-120%)"};
    
    
    ${({ sx }) => sx};   
    
    @media (min-width: 600px) {
        ${({ sm }) => sm};    
        padding: 1rem;
    }
    
    @media (min-width: 900px) {
        ${({ md }) => md};    
        padding: 2rem;
    }

    @media (min-width: 1200px) {
      ${({ lg }) => lg};    
    }
`
