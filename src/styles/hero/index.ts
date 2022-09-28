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
    color: #95a5a6;
    font-family: ${projectFonts.primary};
    visibility: visible !important;
    text-transform: uppercase;
    font-size: 14px;



    background-color: ${projectColors.light};
    border: 0;
    border-bottom: 1px solid #D9D9D9;
    outline: 0;
    width: 100%;
    height: 32px;
    padding: .2rem 1rem;
    margin-bottom: 1rem;
    
    @media (min-width: 900px) {
        margin-bottom: 0;
        margin-top: 0;
        height: 32px;
    }
`

export const SelectInput = styled.select`
    background-color: ${projectColors.light};
    border: 0;
    border-bottom: 1px solid #D9D9D9;
    outline: 0;
    width: 100%;
    height: 32px;
    padding: .2rem 2rem;
    
    option{
        background-color: red;
    }
    
    @media (min-width: 900px) {
        margin-bottom: 0;
        border-radius: 0px;
        border-bottom-left-radius: 100px;
        margin-top: 0;
        height: 32px;
        
    }
`

export const Wrapper = styled(Container)`
    min-height:calc(100vh - 80px - 40px);
    background-color: ${projectColors.primary};
    padding: 1rem;
    overflow-x: hidden;

    @media (max-width: 992px) {
        background-image: url('/images/park.jpg');
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;        
    }
`


export const FormGroup = styled(Box)`
    width: 100%;
    font-size: 12px;
    color: ${projectColors.grayD9};
`

