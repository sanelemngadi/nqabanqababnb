import styled from '@emotion/styled';
import React from 'react';
import { projectColors, projectFonts } from '../../../styles/theme';


const Header = styled.h1`
    color: ${projectColors.secondary};
    text-shadow: -1px -1px 0 ${projectColors.primary}, 0 -1px 0 ${projectColors.primary}, 1px -1px 0 ${projectColors.primary}, 1px 0 0 ${projectColors.primary}, 1px 1px 0 ${projectColors.primary}, 0 1px 0 ${projectColors.primary}, -1px 1px 0 ${projectColors.primary}, -1px 0 0 ${projectColors.primary};

    font-family: ${projectFonts.secondary};

    text-align: left;
    margin-top: 24px;
    margin-left: 24px;
    flex-wrap: wrap;
    span:nth-of-type(1){
        font-size: 1.5rem;
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
    }
    @media (min-width: 500px) {
        span:nth-of-type(1){
            font-size: 2rem;
        }
        span:nth-of-type(2){
            font-size: 3rem;
        }
        span:nth-of-type(3){
            font-size: 2rem;
        }
    }
    @media (min-width: 768px) {
        span:nth-of-type(1){
            font-size: 2.5rem;
        }
        span:nth-of-type(2){
            font-size: 3.5rem;
        }
        span:nth-of-type(3){
            font-size: 2.5rem;
        }
    }
    
    
    @media (min-width: 992px) {
        margin-top: 88px;
        text-align: center;
        span:nth-of-type(1){
            font-size: 3rem;
            display: inline-block;
        }
        span:nth-of-type(2){
            font-size: 3rem;
        }
        span:nth-of-type(3){
            font-size: 3rem;
            vertical-align: bottom;
        }
    }
`
const Heading = () => {
    return (
        <Header>
            <span>Welcome to&nbsp;</span>
            <span>Nqabanqaba&nbsp;</span>
            <span>BnB</span>

        </Header>
    )
}

export default Heading