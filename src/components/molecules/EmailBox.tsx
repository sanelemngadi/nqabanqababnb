import React, { FunctionComponent } from 'react';
import theme, { projectFonts } from '../../styles/theme';

import MailOutlinedIcon from '@mui/icons-material/MailOutlined';
import Box from '../atoms/Box';
import Typography from '../atoms/Typography';
import styled from 'styled-components';

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
                <MailOutlinedIcon sx={{ color: color ? color : theme.palette.primary.main }} />
            </Box>
            <Typography>
                <a href="mailto:admin@nqabanqaba.co.za"
                    style={{
                        color: color ? color : theme.palette.primary.main,
                        fontSize: "14px",
                        fontFamily: projectFonts.primary
                    }}>nqabanqaba2105@gmail.com</a>
            </Typography>
        </EmailBoxStyled>
    )
}

export default EmailBox