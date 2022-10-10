import React, { FC } from 'react';
import styled from 'styled-components';
import { UniversalComponentPropsInterface } from '../../../interfaces';

const Wrapper = styled.div<UniversalComponentPropsInterface<string>>`
        list-style: none;
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

const ListItem: FC<UniversalComponentPropsInterface<string>> = (props) => {
    return (
        <Wrapper {...props}
        >
            {props.children}
        </Wrapper>
    )
}

export default ListItem