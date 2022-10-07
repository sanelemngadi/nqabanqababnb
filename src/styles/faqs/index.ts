import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";
import { projectFonts } from "../theme";

export const Text = styled(Typography)`
    font-family: ${projectFonts.primary};
    /* background-color: blue; */
`;

export const Wrapper = styled(Box)`
    max-width: 738px;
    margin: 1rem auto;
    /* background-color: #F5F5F5; */
`