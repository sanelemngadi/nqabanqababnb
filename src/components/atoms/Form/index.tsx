import React, { FC } from 'react';
import styled from 'styled-components';
import { UniversalComponentPropsInterface } from '../../../interfaces';
import { MediaQuery } from '../../../utils';

interface Props extends UniversalComponentPropsInterface<string> {
  target?: string,
  action?: string,
}

const Wrapper = styled.form<Props>`
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

const Form: FC<Props> = (props) => {
  return (
    <Wrapper {...props}
    >
      {props.children}
    </Wrapper>
  )
}

export default Form