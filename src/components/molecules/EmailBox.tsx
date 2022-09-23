import React, { FunctionComponent } from 'react';
import theme from '../../styles/theme';

//material ui components
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import styled from "@emotion/styled";

//icons
import MailOutlinedIcon from '@mui/icons-material/MailOutlined';

interface Props {
    small: boolean
}

const EmailBoxStyled = styled(Paper)`
    background-color: #fff;
`

const EmailBox: FunctionComponent<Props> = ({ small }) => {
    return (
        <EmailBoxStyled
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
                <MailOutlinedIcon />
            </Box>
            <Typography>
                <a href="mailto:admin@nqabanqaba.co.za"
                    style={{
                        color: theme.palette.primary.main,
                        fontSize: "14px"
                    }}>admin@nqabanqaba.co.za</a>
            </Typography>
        </EmailBoxStyled>
    )
}

export default EmailBox