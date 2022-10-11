import { CSSProperties } from "react";
import { css, Interpolation } from "styled-components";

export const slugify = (word: string): string => {
  return word.trim().toLowerCase().replaceAll(" ", '-');
};

interface MediaQueries {
  sm?: Interpolation<CSSProperties>,
  md?: Interpolation<CSSProperties>,
  lg?: Interpolation<CSSProperties>,
}

export const MediaQuery = (props: MediaQueries) => {
  if (props.sm) {
    return css`
      @media (min-width: 600px) {
        ${props.sm};    
      }
    `
  }
  if (props.md) {
    return css`
      @media (min-width: 900px) {
        ${props.md};    
      }
    `
  }
  if (props.lg) {
    return css`
      @media (min-width: 1200px) {
        ${props.lg};    
      }
    `
  }
  return;
}

