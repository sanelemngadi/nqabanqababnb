import React, { FC } from 'react';
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import styled from "@emotion/styled";
import { projectColors, projectFonts } from '../../../styles/theme';

interface Props {
    head: string,
    subHead: string,
}

const Wrapper = styled(Box)`
    max-width: 768px;
    margin: 0 auto;
`
const TabHeading: FC<Props> = ({ head, subHead }) => {


    return (
        <Wrapper>
            <Typography
                variant="h3"
                component="h1"
                sx={{
                    fontWeight: "700",
                    fontFamily: projectFonts.secondary,
                    fontSize: { xs: "20px", md: "32px" },
                    textAlign: { xs: "center", md: "left" },
                    color: projectColors.light,
                    margin: "0 auto",
                    px: "8px",
                    lineHeight: "1.5",
                    // background: "black",
                    height: { xs: "64px", md: "96px" },
                    display: "flex",
                    alignItems: "center"
                }}
            >
                {head}
            </Typography>
            <Typography
                variant="body2"
                component="p"
                sx={{
                    px: "8px",
                    fontFamily: projectFonts.primary,
                    fontSize: { xs: "16px", md: "20px" },
                    textAlign: { xs: "center", md: "left" },
                    color: projectColors.tertiary,
                    fontWeight: "normal",
                    maxWidth: { xs: "350px", md: "576px" },
                    margin: "0px auto",
                    // background: "white",
                    height: "72px",
                    display: "flex",
                    alignItems: "center"
                }}
            >
                {subHead}
            </Typography>
        </Wrapper >
    )
}

export default TabHeading