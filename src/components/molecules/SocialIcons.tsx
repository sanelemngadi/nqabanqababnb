import React, { FC } from 'react';

import { FaWhatsapp, FaInstagram, FaFacebookSquare } from "react-icons/fa"
import { Center } from '../../styled.globals';

import styled from 'styled-components';

import Box from '@mmasco-atoms/Box';
import IconButton from '@mmasco-atoms/IconButton';

const Icon = styled(IconButton)`
    ${Center({})};
    cursor: pointer;
    padding: 4px;

    &:hover{
        border-radius: 25%;
    }
`;

const Wrapper = styled(Box)`
    display: none;
    align-items: center;
    justify-content: space-between;
    color: #9a9a9a;

    @media (min-width: 900px) {
        display: flex;
    }
`


const SocialIcons: FC = () => {
    return (
        <Wrapper>
            <Icon
                sx={{
                    backgroundColor: '#000',
                    color: '#fff'
                }}
            >
                <FaWhatsapp size={24} />
            </Icon>
            <Icon
                sx={{
                    backgroundColor: '#000',
                    color: '#fff'
                }}>
                <FaInstagram size={24} />
            </Icon>
            <Icon
                sx={{
                    backgroundColor: '#000',
                    color: '#fff'
                }}
            >
                <FaFacebookSquare size={24} />
            </Icon>
        </Wrapper>
    )
}

export default SocialIcons