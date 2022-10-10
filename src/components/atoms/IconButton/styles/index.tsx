import styled, { keyframes } from "styled-components"
import { UniversalComponentPropsInterface } from "../../../../interfaces"
import { Center } from "../../../../styled.globals"

export interface ButtonPropsInterface extends UniversalComponentPropsInterface<string> { }

const clip = keyframes`
  from{
    clip-path: circle(0% at 50% 50%);
    background-color: rgba(0 0 0 / 15%);
  }
  to{
    clip-path: circle(100.0% at 50% 50%);
    background-color: rgba(0 0 0 / 15%);
  }
`

export const Nqaba = styled.button<ButtonPropsInterface>`
    width: 36px;
    height: 36px;
    border-radius: 50%;
    ${Center({})};
    user-select: none;
    cursor: pointer;
    background-color: #fff;
    border: 0;
    outline: 0;
    transition: background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    position: relative;
    
    &:hover{
        background-color: rgba(14, 37, 54, 0.04);
    }
    &:active::after{
        content: '';
        display: inline-flex;
        width: 100%;
        height: 100%;
        border-radius: 50%;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        user-select: none;
        
        animation: ${clip} 0.2s ease-in;
    }
    ${({ sx }) => sx};
    
    `