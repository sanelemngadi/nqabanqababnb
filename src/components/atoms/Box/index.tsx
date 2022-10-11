import React, { FC } from 'react';
import styled from 'styled-components';
import { UniversalComponentPropsInterface } from '../../../interfaces';
import { MediaQuery } from '../../../utils';
// import * as CSS from "csstype"

const Wrapper = styled.div<UniversalComponentPropsInterface<string>>`
    ${({ sx }) => sx};  
    ${(props) => MediaQuery(props)}
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