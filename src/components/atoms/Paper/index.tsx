import React, { FC } from 'react';
import styled from 'styled-components';
import { MmascoUniversalInterface } from '../../../interfaces';
import { SxQueries } from '../../../utils';

interface Props extends MmascoUniversalInterface<string> {
  elevation?: number,
}

const Wrapper = styled.div<Props>`
      ${SxQueries}
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