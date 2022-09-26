import styled from "@emotion/styled";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";
import { projectColors } from "../theme";


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

export const TextInput = styled(TextField)`
    background-color: ${projectColors.light};
    border-radius: 8px;
    border: 0;
    outline: 0;

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