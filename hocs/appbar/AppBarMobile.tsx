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
import { useFaqsContext } from "../../src/context";

import CancelIcon from '@mui/icons-material/Cancel';

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

    const item = useFaqsContext();
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

                {item.vals ? <Button
                    color="error"
                    onClick={() => item.setValue(false)}
                    sx={{
                        marginRight: "0px",
                        display: "flex",
                        justifyContent: "flex-end",

                    }}
                >
                    <CancelIcon fontSize='small' />
                </Button> :
                    <Button
                        onClick={() => item.setValue(true)}
                        size='small'
                        sx={{
                            marginRight: "0px",
                            color: projectColors.tertiary
                        }}>
                        <Icon><HelpOutlineIcon /></Icon>
                    </Button>
                }
                <AppBarMenu>
                    <IconButton
                        color="primary"
                        component="div"
                        disabled={item.vals}
                        onClick={() => setState(true)}
                    >
                        <MenuIcon fontSize='small' />
                    </IconButton>
                </AppBarMenu>
            </AppBarContainer>
        </Paper >
    )
}

export default AppBarMobile