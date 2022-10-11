import React, { FC } from 'react';
import styled from 'styled-components';
import { UniversalComponentPropsInterface } from '../../../interfaces';
import { MediaQuery } from '../../../utils';

interface Props extends UniversalComponentPropsInterface<string> {
  elevation?: number,
}

const Wrapper = styled.div<Props>`
      ${({ sx }) => sx}; 
      
      
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

const Paper: FC<Props | any> = (props) => {
  return (
    <Wrapper
      {...props}
      as={props.component !== undefined ? props.component : "div"}>
      {props.children}
    </Wrapper>
  )
}

export default Paper