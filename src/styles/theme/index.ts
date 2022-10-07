import { red } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";
//9A9A9A grey

export const projectColors = {
    primary: "#0E2536",
    secondary: "#F6B47D",
    tertiary: "#4F55E3",
    grey: "#9A9A9A",
    grayD9: "#D9D9D9",
    bgsecondary: "#D7DDF2",
    light: "#fff",
    dark: "#000",
}

export const projectFonts = {
    primary: "'Dosis', Helvetica, sans-serif",
    secondary: "'Cormorant', serif",
}

const theme = createTheme({
    palette: {
        primary: {
            main: projectColors.primary
        },
        secondary: {
            main: projectColors.secondary
        },
        error: {
            main: red.A400
        }
    }
});

export default theme;