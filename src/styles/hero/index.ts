// import styled from "@emotion/styled";
// import Typography from "@mui/material/Typography";
// import Container from "@mui/material/Container";
import styled from "styled-components";
import Box from "../../components/atoms/Box";
import Container from "../../components/atoms/Container";
import Typography from "../../components/atoms/Typography";
// import { Container } from "../../styled.globals";
// import Box from "@mui/material/Box";
import { projectColors, projectFonts } from "../theme";


export const TextShadow = styled(Typography)`
    text-shadow: -1px -1px 0 ${projectColors.primary}, 
                0 -1px 0 ${projectColors.primary}, 
                1px -1px 0 ${projectColors.primary}, 
                1px 0 0 ${projectColors.primary}, 
                1px 1px 0 ${projectColors.primary}, 
                0 1px 0 ${projectColors.primary}, 
                -1px 1px 0 ${projectColors.primary}, 
                -1px 0 0 ${projectColors.primary};
`

export const TextInput = styled.input`
     appearance: none;
    -webkit-appearance: none;
    color: #000;
    font-family: ${projectFonts.primary};
    visibility: visible !important;
    text-transform: uppercase;
    font-size: 14px;
    border: 0;
    border-bottom: 1px solid #D9D9D9;
    outline: 0;
    width: 100%;
    height: 32px;
    padding: .2rem 1rem;
    margin-bottom: 1rem;
    color: blue;
    background-color: #EFEFEF;
    
    @media (min-width: 900px) {
        margin-bottom: 0;
        margin-top: 0;
        height: 32px;
    }
`

export const SelectInput = styled.select<{ pricing?: number }>`
    background-color: #EFEFEF;
    border: 0;
    border-bottom: 1px solid #D9D9D9;
    outline: 0;
    width: 100%;
    height: 32px;
    padding: .2rem 2rem;
    border-radius: 0px;
    
    @media (min-width: 900px) {
        margin-bottom: 0;
        border-radius: 0px;
        margin-top: 0;
        height: 32px;
        
    }
`

export const Wrapper = styled(Container)`
    background-image: url('/images/park.jpg') !important;
    background-repeat: no-repeat !important;
    background-size: cover !important;
    background-position: center !important;        
    min-height:calc(100vh - 80px - 40px) !important;
    padding: 1rem !important;
    overflow-x: hidden !important;
    
    @media (min-width: 992px) {
        background-image: unset !important;
        background-color: ${projectColors.primary} !important;
    }
    `


export const FormGroup = styled(Box)`
    width: 100%;
    font-size: 14px;
    color: #707070;

    label{
        font-family: ${projectFonts.secondary};
    }
`

