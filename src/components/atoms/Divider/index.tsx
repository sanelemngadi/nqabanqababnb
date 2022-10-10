import React, { FC } from 'react';
import styled from 'styled-components';
import { UniversalComponentPropsInterface } from '../../../interfaces';

const Wrapper = styled.hr<UniversalComponentPropsInterface<string>>`
    margin: 0;
    flex-shrink: 0;
    border-width: 0;
    border-style: solid;
    border-color: rgba(0, 0, 0, 0.12);
    border-bottom-width: thin;
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

const Divider: FC<UniversalComponentPropsInterface<string>> = (props) => {
  return (
    <Wrapper {...props} variant={'hr'} />
  )
}

export default Divider