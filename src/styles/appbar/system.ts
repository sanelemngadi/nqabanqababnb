import Box from "@mui/material/Box";
import List from "@mui/material/List";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import { projectColors } from "../theme";

export const AppBarContainer = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'space-between',
    height: "48px",
    padding: '16px',
    alignItems: 'center',
    position: 'sticky',
    top: '0',
    left: '0',
    backgroundColor: projectColors.light,
    margin: '0 auto',

    [theme.breakpoints.up('md')]: {
        justifyContent: 'center',
        height: '80px',

    }
}))


export const AppBarButtons = styled(Box)(({ theme }) => ({
    display: 'none',
    flex: '2',
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: '264px',

    [theme.breakpoints.up('md')]: {
        display: 'flex',
    }
}));

export const DeskTopLinkList = styled(List)(({ theme }) => ({
    display: 'none',

    [theme.breakpoints.up('md')]: {
        display: 'block',
    }
}));

export const AllScreenLogo = styled(Box)(({ theme }) => ({
    display: 'inline-flex',
    alignItems: 'center',

    [theme.breakpoints.up('md')]: {
        display: 'flex',
        flex: '1',
        justifyContent: 'flex-start',
        alignItems: 'unset',

    }
}));

export const AppBarMenu = styled(Box)(({ theme }) => ({
    width: '64px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',

    [theme.breakpoints.up('md')]: {
        display: 'none',
    }
}));