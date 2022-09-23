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
                    margin: "0 auto"
                }}
            >
                {head}
            </Typography>
            <Typography
                variant="body2"
                component="p"
                sx={{
                    padding: "0px",
                    fontFamily: projectFonts.primary,
                    fontSize: { xs: "16px", md: "20px" },
                    textAlign: { xs: "center", md: "left" },
                    color: projectColors.tertiary,
                    fontWeight: "normal",
                    maxWidth: { xs: "350px", md: "576px" },
                    margin: "16px auto"
                }}
            >
                {subHead}
            </Typography>
        </Wrapper >
    )
}

export default TabHeading