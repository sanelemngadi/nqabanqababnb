import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";

export const useScreenSize = (size: any) => {
    const theme = useTheme();
    let matches = useMediaQuery(theme.breakpoints.down(size));

    return matches;
}