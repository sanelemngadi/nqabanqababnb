import styled from "@emotion/styled";
import ListItem from "@mui/material/ListItem";

import Box from "@mui/material/Box";
import { projectColors } from "../theme";

//the container
export const AppBarContainer = styled(Box)`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 16px;
    position: sticky !important;
    top: 0;
    left: 0;
    background-color:${projectColors.light};
    height: 80px;
    margin: 0 auto;
`
export const LinkItems = styled(ListItem)`
    display: ${({ type }: { type: "row" | "col" }) => type === "row" ? "flex" : "block"};
    flex: 3;
    justify-content:  center;
    align-items: center;
    padding: 0px;
`

export const AppBarButtons = styled.div`
    display: flex;
    flex: 2;
    justify-content:  flex-end;
    align-items: center;
    width: 264px;
`