import Image from 'next/image'
import React, { FC } from 'react'
import { AppBarContainer } from '../../src/styles/appbar';
import MenuIcon from '@mui/icons-material/Menu';
import styled from "@emotion/styled";

import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { projectColors } from '../../src/styles/theme';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';

const AppBarMobileLogo = styled.div`
    display: inline-flex;
    align-items: center;
`;
const Icon = styled(Box)`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-left: auto;
`

const AppBarMenu = styled.div``;
const AppBarMobile: FC<{ setState(x: boolean): void }> = ({ setState }) => {
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
                <Button
                    size='small'
                    sx={{
                        marginRight: "0px",
                        // backgroundColor: projectColors.bgsecondary,
                        color: projectColors.tertiary
                    }}>
                    {/* <Typography variant="h6" sx={{
                        fontSize: "12px",
                        lineHeight: "1",
                    }}>FAQs</Typography> */}
                    <Icon><HelpOutlineIcon /></Icon></Button>
                <AppBarMenu>
                    <IconButton color="primary" component="div"
                        onClick={() => setState(true)}
                    >
                        <MenuIcon />
                    </IconButton>
                </AppBarMenu>
            </AppBarContainer>
        </Paper>
    )
}

export default AppBarMobile