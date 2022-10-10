import React, { FC } from 'react';
import styled from 'styled-components';
import { UniversalComponentPropsInterface } from '../../../interfaces';

interface Props extends UniversalComponentPropsInterface<
  "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "body1" | "body2" | "caption" | "p"
> { }

const Wrapper = styled.p<Props>`
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

const Typography: FC<Props> = (props) => {
  return (
    <Wrapper
      {...props}
      as={props.variant !== undefined ? props.variant : "p"}
    >
      {props.children}
    </Wrapper>
  )
}

export default Typography;