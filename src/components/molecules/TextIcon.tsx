import React, { FunctionComponent } from 'react';
import theme from '../../styles/theme';

//material ui components
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import styled from "@emotion/styled";


interface Props {
    bg?: string,
    color?: string,
    label: string,
    elem: JSX.Element,
    width?: string,
    fs?: string,
}

const TextIconStyled = styled(Paper) <{ bg: string }>`
    background-color: ${({ bg }) => bg};
`

const TextIcon: FunctionComponent<Props> = ({ color, bg, label, elem, width, fs }) => {
    return (
        <TextIconStyled elevation={0} bg={bg ? bg : "#fff"}
            sx={{
                display: "flex",
                width: width ? width : "224px",
                justifyContent: "flex-start",
                alignItems: "center",
                marginY: "8px"
            }}
        >
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    fontSize: fs ? fs : "12px",
                    paddingRight: "16px"
                }}>
                {elem}
            </Box>
            <Typography
                sx={{
                    color: color ? color : theme.palette.primary.main,
                    fontSize: fs ? fs : "14px",
                }}
            >
                {label}
            </Typography>
        </TextIconStyled>
    )
}

export default TextIcon