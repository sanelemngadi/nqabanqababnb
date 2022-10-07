import styled from "@emotion/styled";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
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


    
    /* background-color: ${projectColors.light}; */
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
    /* background-color: ${projectColors.light}; */
    background-color: #EFEFEF;
    border: 0;
    border-bottom: 1px solid #D9D9D9;
    outline: 0;
    width: 100%;
    height: 32px;
    padding: .2rem 2rem;
    border-radius: 0px;
    
    /* option{
        background-color: red;
    } */
    
    @media (min-width: 900px) {
        margin-bottom: 0;
        border-radius: 0px;
        margin-top: 0;
        height: 32px;
        
    }
`

export const Wrapper = styled(Container)`
    background-image: url('/images/park.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;        
    min-height:calc(100vh - 80px - 40px);
    padding: 1rem;
    overflow-x: hidden;
    
    @media (min-width: 992px) {
        background-image: unset;
        background-color: ${projectColors.primary};
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

