import React, { FC } from 'react';
import styled from 'styled-components';
import { MmascoUniversalInterface } from '../../../interfaces';
import { SxQueries } from '../../../utils';

const Mmasco = styled.ul<MmascoUniversalInterface<string>>`
    ${SxQueries}
`

const UnOrderedList: FC<MmascoUniversalInterface<string>> = (props) => {
  return (
    <Mmasco {...props}
    >
      {props.children}
    </Mmasco>
  )
}

export default UnOrderedList