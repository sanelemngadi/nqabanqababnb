import React, { FC } from 'react';
import styled from 'styled-components';
import { MmascoUniversalInterface } from '../../../interfaces';
import { SxQueries } from '../../../utils';

const Wrapper = styled.div<MmascoUniversalInterface<string>>`
        list-style: none;
      ${SxQueries}
`

const ListItem: FC<MmascoUniversalInterface<string>> = (props) => {
  return (
    <Wrapper {...props}
    >
      {props.children}
    </Wrapper>
  )
}

export default ListItem