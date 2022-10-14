import React, { FunctionComponent } from 'react';

import styled from 'styled-components';
import { projectColors } from '../../styles/theme';

import Box from '@mmasco-atoms/Box';
import Typography from '@mmasco-atoms/Typography';


interface Props {
    bg?: string,
    color?: string,
    label: string,
    elem: JSX.Element,
    fs?: string,
}

const TextIconStyled = styled(Box) <{ bg: string }>`
    background-color: ${({ bg }) => bg};
`

const TextIcon: FunctionComponent<Props> = ({ color, bg, label, elem, fs }) => {
    return (
        <TextIconStyled bg={bg ? bg : "transparent"}
            sx={{
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
                marginTop: "8px",
                marginBottom: "8px",
                flexWrap: "wrap"
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
                    color: color ? color : projectColors.primary,
                    fontSize: fs ? fs : "14px",
                }}
            >
                {label}
            </Typography>
        </TextIconStyled>
    )
}

export default TextIcon