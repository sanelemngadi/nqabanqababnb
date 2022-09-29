import React, { FC } from 'react';
import Box from "@mui/material/Box";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import { styled } from '@mui/material/styles';

const Icon = styled(Box)(() => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    padding: '4px',

    ':hover': {
        backgroundColor: 'rgb(221, 219, 219)',
        borderRadius: '25%',
    },

    ':nth-of-type(1):hover': {
        color: 'green',
    },
    ':nth-of-type(2):hover': {
        color: 'gold',
    },
    ':nth-of-type(3):hover': {
        color: 'blue',
    }
}));

const Wrapper = styled(Box)(({ theme }) => ({
    display: 'none',
    alignItems: "center",
    justifyContent: "space-between",
    color: "#9a9a9a",

    [theme.breakpoints.up('md')]: {
        display: 'flex',
    }

}))
const SocialIcons: FC = () => {
    return (
        <Wrapper>
            <Icon>
                <WhatsAppIcon fontSize='small' />
            </Icon>
            <Icon>
                <InstagramIcon fontSize='small' />
            </Icon>
            <Icon>
                <FacebookIcon fontSize='small' />
            </Icon>
        </Wrapper>
    )
}

export default SocialIcons