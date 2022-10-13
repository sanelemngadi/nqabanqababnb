import React, { FC } from 'react';
import styled, { css } from 'styled-components';
import { MmascoUniversalInterface } from '../../../interfaces';
import { SxQueries } from '../../../utils';

interface Props extends MmascoUniversalInterface<string> {
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
    
    ${({ maxWidth }) => contained(maxWidth)}
    ${SxQueries}
`

const Container: FC<Props> = (props) => {
  return (
    <Wrapper {...props}>
      {props.children}
    </Wrapper>
  )
}

export default Container