import React, { FunctionComponent } from 'react';
import { projectColors, projectFonts } from '../../styles/theme';

import styled from 'styled-components';

import { GoMail } from "react-icons/go";

import Box from '@mmasco-atoms/Box';
import Typography from '@mmasco-atoms/Typography';

interface Props {
    bg?: string,
    color?: string,
}

const EmailBoxStyled = styled(Box) <{ bg: string }>`
    display: none;
    background-color: ${(props) => props.bg};
    @media (min-width: 900px) {
        display: flex;
    }
`;

const EmailBox: FunctionComponent<Props> = ({ color, bg }) => {
    return (
        <EmailBoxStyled
            bg={bg ? bg : "#fff"}
            sx={{
                minWidth: "224px",
                justifyContent: "space-around",
                alignItems: "center",
                px: "8px",
            }}
        >
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    fontSize: "12px"
                }}>
                <GoMail color={color ? color : projectColors.primary} />
            </Box>
            <Typography>
                <a href="mailto:admin@nqabanqaba.co.za"
                    style={{
                        color: color ? color : projectColors.primary,
                        fontSize: "14px",
                        fontFamily: projectFonts.primary
                    }}>nqabanqaba2105@gmail.com</a>
            </Typography>
        </EmailBoxStyled>
    )
}

export default EmailBox