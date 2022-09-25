import React, { FC } from 'react';
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import styled from "@emotion/styled";
import { projectFonts } from '../../../styles/theme';

interface Props {
    head: string,
    subHead: string
}

const Wrapper = styled(Box)`
    max-width: 738px;
    margin: 1rem auto;
`
const SectionHeading: FC<Props> = ({ head, subHead }) => {


    return (
        <Wrapper>
            <Typography
                variant="h3"
                component="h1"
                sx={{
                    fontWeight: "700",
                    fontFamily: projectFonts.secondary,
                    fontSize: { xs: "24px", sm: "36px" },
                    textAlign: "center"
                }}
            >
                {head}
            </Typography>
            <Typography
                variant="h5"
                component="h3"
                sx={{
                    padding: "0 1rem",
                    color: "#8D91B4",
                    fontFamily: projectFonts.secondary,
                    fontSize: { xs: "16px", sm: "24px" },
                    textAlign: "center",
                    marginTop: { xs: "8px", md: "16px" }
                }}
            >
                {subHead}
            </Typography>
        </Wrapper >
    )
}

export default SectionHeading;