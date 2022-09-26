import React, { FunctionComponent } from 'react';
import theme, { projectFonts } from '../../styles/theme';

//material ui components
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import styled from "@emotion/styled";

//icons
import MailOutlinedIcon from '@mui/icons-material/MailOutlined';

interface Props {
    small?: boolean,
    bg?: string,
    color?: string
}

const EmailBoxStyled = styled(Paper) <{ bg: string }>`
    background-color: ${({ bg }) => bg};
`

const EmailBox: FunctionComponent<Props> = ({ small, color, bg }) => {
    return (
        <EmailBoxStyled bg={bg ? bg : "#fff"}
            sx={{
                display: small ? "none" : "flex",
                width: "224px",
                justifyContent: "space-around",
                alignItems: "center"
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
                    }}>admin@nqabanqaba.co.za</a>
            </Typography>
        </EmailBoxStyled>
    )
}

export default EmailBox