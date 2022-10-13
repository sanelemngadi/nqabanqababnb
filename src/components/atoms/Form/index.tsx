import React, { FC } from 'react';
import styled from 'styled-components';
import { MmascoUniversalInterface } from '../../../interfaces';
import { SxQueries } from '../../../utils';

interface Props extends MmascoUniversalInterface<string> {
  target?: string,
  action?: string,
}

const Wrapper = styled.form<Props>`
    ${SxQueries}
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