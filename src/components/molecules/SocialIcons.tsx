import React, { FC } from 'react';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';

import styled from 'styled-components';
import Box from '../atoms/Box';
import IconButton from '../atoms/IconButton';
import { Center } from '../../styled.globals';

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
                <WhatsAppIcon fontSize='small' />
            </Icon>
            <Icon
                sx={{
                    backgroundColor: '#000',
                    color: '#fff'
                }}>
                <InstagramIcon fontSize='small' />
            </Icon>
            <Icon
                sx={{
                    backgroundColor: '#000',
                    color: '#fff'
                }}
            >
                <FacebookIcon fontSize='small' />
            </Icon>
        </Wrapper>
    )
}

export default SocialIcons