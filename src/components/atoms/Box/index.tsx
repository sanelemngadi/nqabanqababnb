import React, { FC, forwardRef } from 'react';
import styled from 'styled-components';
import { MmascoUniversalInterface } from '../../../interfaces';
import { SxQueries } from 'src/utils';


const Mmasco = styled.div<MmascoUniversalInterface<string>>`
    ${SxQueries}
`

const Box = forwardRef<React.MutableRefObject<any>, MmascoUniversalInterface<string>>((props, ref) => {

  return (
    <Mmasco {...props}
      ref={ref}
      as={props.component !== undefined ? props.component : "div"}
    >
      {props.children}
    </Mmasco>
  )
})

Box.displayName = 'Box';

export default Box;