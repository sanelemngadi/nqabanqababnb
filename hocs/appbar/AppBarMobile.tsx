import Image from 'next/image'
import React from 'react'
import { AppBarContainer } from '../../src/styles/appbar';
import MenuIcon from '@mui/icons-material/Menu';
import styled from "@emotion/styled";

import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";

const AppBarMobileLogo = styled.div`
    display: inline-flex;
    align-items: center;
`;
const AppBarMenu = styled.div``;
const AppBarMobile = () => {
    return (
        <Paper
            sx={{

                position: "sticky !important",
                top: 0,
                left: 0,
                zIndex: '1999'
            }}
        >
            <AppBarContainer
                sx={{
                    justifyContent: "space-between !important",
                    height: "48px !important"
                }}>
                <AppBarMobileLogo>
                    <Button color="primary" component="a">
                        <Image
                            src="/vectors/logo.svg"
                            width={128} height={32}
                            layout="fixed"
                            alt="nqabanqaba logo"
                        />
                    </Button>
                </AppBarMobileLogo>
                <AppBarMenu>
                    <IconButton color="primary" component="div">
                        <MenuIcon />
                    </IconButton>
                </AppBarMenu>
            </AppBarContainer>
        </Paper>
    )
}

export default AppBarMobile