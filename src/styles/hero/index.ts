import styled from "@emotion/styled";
import Typography from "@mui/material/Typography";
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