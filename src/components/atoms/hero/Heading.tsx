import React, { memo } from 'react';
import styled from '@emotion/styled';
import { projectColors, projectFonts } from '../../../styles/theme';


const Header = styled.h1`
    color: ${projectColors.secondary};
    text-shadow: -1px -1px 0 ${projectColors.primary}, 0 -1px 0 ${projectColors.primary}, 1px -1px 0 ${projectColors.primary}, 1px 0 0 ${projectColors.primary}, 1px 1px 0 ${projectColors.primary}, 0 1px 0 ${projectColors.primary}, -1px 1px 0 ${projectColors.primary}, -1px 0 0 ${projectColors.primary};

    font-family: ${projectFonts.secondary};

    text-align: center;
    margin-top: 24px;
    margin-left: 0px;
    margin-bottom: 16px;
    flex-wrap: wrap;
    font-size: 3rem;
    font-weight: 700;
    line-height: 1.1;
    /* overflow: hidden; */
    
    @media (min-width: 768px) {
        font-size: 4rem;
        
        margin-top: 24px;
        margin-left: 24px;
    }

    /* span:nth-of-type(1){
        display: block;
    }
    span:nth-of-type(2){
        font-size: 2.5rem;
    }
    span:nth-of-type(3){
        font-size: 1.5rem;
        vertical-align: super;
        @media (max-width: 400px) {
            display: block;
        }
    } */
    /* @media (min-width: 500px) {
        span:nth-of-type(1){
            font-size: 2rem;
        }
        span:nth-of-type(2){
            font-size: 3rem;
        }
        span:nth-of-type(3){
            font-size: 2rem;
        }
    } */
    /* @media (min-width: 768px) {
        span:nth-of-type(1){
            font-size: 2.5rem;
        }
        span:nth-of-type(2){
            font-size: 3.5rem;
        }
        span:nth-of-type(3){
            font-size: 2.5rem;
        }
    } */
    
    
    @media (min-width: 992px) {
        margin-top: 88px;
        /* span:nth-of-type(1){
            font-size: 3rem;
            display: inline-block;
        }
        span:nth-of-type(2){
            font-size: 3rem;
        }
        span:nth-of-type(3){
            font-size: 3rem;
            vertical-align: bottom;
        } */
    }
`
const Heading = () => {
    return (
        <Header>
            Welcome to Nqabanqaba BnB
        </Header>
    )
}

export default memo(Heading);