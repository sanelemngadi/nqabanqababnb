import React, { FC } from 'react';
import Box from "@mui/material/Box";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import styled from "@emotion/styled";

interface Props {
    small: boolean
}

const Icon = styled(Box)`
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    padding: 4px;

    &:hover{
       background-color:rgb(221, 219, 219); 
       border-radius: 25%;
    }

    &:nth-of-type(1):hover{
        color: green;
    }
    &:nth-of-type(2):hover{
        color: gold;
    }
    &:nth-of-type(3):hover{
        color: blue;
    }
`
const SocialIcons: FC<Props> = ({ small }) => {
    return (
        <Box
            sx={{
                display: small ? "none" : "flex",
                alignItems: "center",
                justifyContent: "space-between",
                color: "#9a9a9a",
            }}
        >
            <Icon>
                <WhatsAppIcon fontSize='small' />
            </Icon>
            <Icon>
                <InstagramIcon fontSize='small' />
            </Icon>
            <Icon>
                <FacebookIcon fontSize='small' />
            </Icon>
        </Box>
    )
}

export default SocialIcons