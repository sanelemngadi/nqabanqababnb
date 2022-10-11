import React, { FC } from 'react';
import styled, { css } from 'styled-components';
import { UniversalComponentPropsInterface } from '../../../interfaces';
import { MediaQuery } from '../../../utils';

interface Props extends UniversalComponentPropsInterface<string> {
  maxWidth?: "sm" | "md" | "lg",
}

const contained = (maxW?: "sm" | "md" | "lg") => {
  switch (maxW) {
    case "sm":
      return css`max-width: 600px;`;
    case "md":
      return css`max-width: 900px;`;
    case "lg":
      return css`max-width: 1200px;`;
    default:
      return css`max-width: 1200px;`;
  }
}

const Wrapper = styled.div<Props>`
    margin: 0 auto;
    padding: 1px 0.5rem ;
    
    ${({ sx }) => sx};
    ${({ maxWidth }) => contained(maxWidth)}

    /* @media (min-width: 600px) {
      ${({ sm }) => sm};    
    }

    @media (min-width: 900px) {
      ${({ md }) => md};    
    }

    @media (min-width: 1200px) {
      ${({ lg }) => lg};    
    } */
    ${(props) => MediaQuery(props)}
`

const Container: FC<Props> = (props) => {
  return (
    <Wrapper {...props}>
      {props.children}
    </Wrapper>
  )
}

export default Container