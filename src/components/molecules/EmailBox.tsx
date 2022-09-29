import React, { FunctionComponent } from 'react';
import theme, { projectFonts } from '../../styles/theme';

//material ui components
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";

import MailOutlinedIcon from '@mui/icons-material/MailOutlined';

interface Props {
    bg?: string,
    color?: string,
    noElevation?: boolean
}

const EmailBoxStyled = styled(Paper)(({ bg }: { bg: string }) => ({
    display: "none",
    backgroundColor: bg,
    [theme.breakpoints.up('md')]: {
        display: "flex",
    }
}));

const EmailBox: FunctionComponent<Props> = ({ color, bg, noElevation }) => {
    return (
        <EmailBoxStyled
            elevation={noElevation ? 0 : 2}
            bg={bg ? bg : "#fff"}
            sx={{
                width: "224px",
                justifyContent: "space-around",
                alignItems: "center",
                px: noElevation ? "0px" : "8px",
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