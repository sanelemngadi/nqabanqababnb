import React, { FC, CSSProperties } from 'react';
import styled, { Interpolation } from 'styled-components';
// import styles from '../styles/Home.module.css'

//this is the universal components and all the other components will inherit from this component

interface UniversalComponentPropsInterface {
  children: JSX.Element | string | JSX.Element[],
  variant?: string | React.ComponentType<any>,
  sx?: Interpolation<CSSProperties>,
  sm?: Interpolation<CSSProperties>,
  md?: Interpolation<CSSProperties>,
  lg?: Interpolation<CSSProperties>
}

const BnB = styled.div<UniversalComponentPropsInterface>`
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
  /* padding: 0 2rem; */
`

export const Nqabanqaba: FC<UniversalComponentPropsInterface> = ({ children, sx, variant, sm, md, lg }) => {
  return (
    <BnB
      sx={sx}
      sm={sm}
      md={md}
      lg={lg}
      as={variant}
    >
      {children}
    </BnB>
  )
}

export default Nqabanqaba;
