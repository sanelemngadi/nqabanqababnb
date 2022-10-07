import React, { FC, memo } from 'react';
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import styled from "@emotion/styled";
import { projectFonts } from '../../../styles/theme';

interface Props {
    head: string,
    subHead: string,
    side?: boolean
}

const Wrapper = styled(Box)`
    max-width: 738px;
    margin: 1rem 0;
`
const SectionHeading: FC<Props> = ({ head, subHead, side }) => {
    return (
        <Wrapper>
            <Typography
                variant="h3"
                component="h1"
                sx={{
                    padding: "0 1rem",
                    fontWeight: "700",
                    fontFamily: projectFonts.secondary,
                    fontSize: { xs: "24px", sm: "36px" },
                    textAlign: { xs: "left", md: side ? "left" : "center" }
                }}
            >
                {head}
            </Typography>
            <Typography
                variant="h5"
                component="h3"
                sx={{
                    padding: "0 1rem",
                    color: "#6A6A6A",
                    fontFamily: projectFonts.secondary,
                    fontSize: { xs: "16px", sm: "24px" },
                    textAlign: { xs: "left", md: side ? "left" : "center" },
                    marginTop: { xs: "8px", md: "16px" }
                }}
            >
                {subHead}
            </Typography>
        </Wrapper >
    )
}

export default memo(SectionHeading);