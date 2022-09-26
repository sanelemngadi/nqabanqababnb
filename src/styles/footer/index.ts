import styled from "@emotion/styled";
import { Box, Container, Grid, Typography } from "@mui/material";
import { projectColors, projectFonts } from "../theme";


export const ItemGrid = styled(Grid)`
    /* background-color: black; */
    color: #D9D9D9;
    padding: 20px;
`
export const FooterWrapper = styled(Container)`
    background-color: ${projectColors.primary};
`

export const Headings = styled(Typography)`
    font-family: ${projectFonts.primary};
    font-size: 14px;
    text-transform: uppercase;
    font-weight: 500;
    color: ${projectColors.secondary};
    margin-bottom: 16px;
`

export const MapLink = styled.a`
    display: inline-flex;
    font-size: 14px;
    font-weight: 300;
    text-decoration: underline;
    color: #D9D9D9;
    cursor: pointer;
    margin-right: 16px;
`
