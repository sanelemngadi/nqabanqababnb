import React, { FC } from 'react';
import styled from 'styled-components';
import { UniversalComponentPropsInterface } from '../../../interfaces';

const Wrapper = styled.div<UniversalComponentPropsInterface<string>>`
      ${({ sx }) => sx};   

    @media (min-width: 600px) {
      ${({ sm }) => sm};    
    }

    @media (min-width: 900px) {
      ${({ md }) => md};    
    }

    @media (min-width: 1200px) {
      ${({ lg }) => lg};    
    }
`

const Box: FC<UniversalComponentPropsInterface<string>> = (props) => {
  return (
    <Wrapper {...props}
      as={props.component !== undefined ? props.component : "div"}
    >
      {props.children}
    </Wrapper>
  )
}

export default Box