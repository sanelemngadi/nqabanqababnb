import React, { FunctionComponent } from 'react';
import theme from '../../styles/theme';

import styled from 'styled-components';
import Box from '../atoms/Box';
import Typography from '../atoms/Typography';


interface Props {
    bg?: string,
    color?: string,
    label: string,
    elem: JSX.Element,
    width?: string,
    fs?: string,
}

const TextIconStyled = styled(Box) <{ bg: string }>`
    background-color: ${({ bg }) => bg};
`

const TextIcon: FunctionComponent<Props> = ({ color, bg, label, elem, width, fs }) => {
    return (
        <TextIconStyled bg={bg ? bg : "transparent"}
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