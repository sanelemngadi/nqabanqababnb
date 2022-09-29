import React, { FC } from 'react';
import { LinkItems } from '../../src/styles/appbar';
import { AppBarButtons, DeskTopLinkList, AllScreenLogo, AppBarMenu, AppBarContainer } from '../../src/styles/appbar/system';
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import ListItemButton from "@mui/material/ListItemButton";

//material ui icons
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import MenuIcon from '@mui/icons-material/Menu';

import styled from "@emotion/styled";
import { projectColors } from '../../src/styles/theme';
import { slugify } from '../../src/utils';

import ActiveLink from '../../src/context/ActiveLink';

import { FaqsButtonComponent, ListTextComponent, LogoComponent } from '../navigationComponents';
import { useRouter } from 'next/router';


const links = [
    "Home", "Our Room", "About Us", "Contact Us"
]

const Icon = styled(Box)`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 8px;
`

interface Props {
    setShowAppBar(x: boolean): void,
    setShowFaqsModal(x: boolean): void
}

const AppBarDesktop: FC<Props> = ({ setShowAppBar, setShowFaqsModal }) => {
    const router = useRouter();
    const today = new Date().toISOString().split('T')[0];
    return (
        <Paper
            className="paperdesktop"
            elevation={4}
            sx={{
                backgroundColor: projectColors.light,
                position: "sticky !important",
                top: 0,
                left: 0,
                zIndex: '999',
            }}
        >
            <AppBarContainer
                maxWidth={"lg"}
            >
                <AllScreenLogo
                >
                    <LogoComponent />
                </AllScreenLogo>




                <DeskTopLinkList>
                    <LinkItems type={"row"}>
                        {links.map((link, idx) => (
                            <ActiveLink
                                key={"i-" + idx}
                                href={link === "Home" ? "/" : `/${slugify(link)}`}
                            >
                                <ListItemButton
                                    sx={{
                                        paddingLeft: "0px", paddingRight: "0px"
                                    }}>
                                    <ListTextComponent link={link} />
                                </ListItemButton>
                            </ActiveLink>
                        ))}
                    </LinkItems>
                </DeskTopLinkList>

                <AppBarButtons>
                    <FaqsButtonComponent
                        setShowFaqsModal={() => setShowFaqsModal(true)}
                        ico={<HelpOutlineIcon />}
                    />

                    <Button
                        variant="contained"
                        sx={{
                            backgroundColor: projectColors.tertiary,
                            color: projectColors.bgsecondary,
                        }}
                    >
                        <Typography variant="h6"
                            onClick={() => { return router.push(`https://book.nightsbridge.com/32135?action=2&nbid=952&bbrtid=0&rtgroupid=0&startdate=${today}&enddate=${today}`) }}

                            sx={{
                                fontSize: "14px",
                                lineHeight: "1.5",
                            }}
                        >Book now!</Typography>

                        <Icon><ArrowOutwardIcon /></Icon>
                    </Button>
                </AppBarButtons>
                <AppBarMenu>


                    {/* /////////////////////////////// */}
                    <Box>
                        <IconButton
                            onClick={() => setShowFaqsModal(true)}
                            size='small'
                            sx={{
                                color: projectColors.tertiary
                            }}>
                            <HelpOutlineIcon />
                        </IconButton>

                    </Box>
                    {/* ///////////////////////// */}

                    <Box>
                        <IconButton
                            color="primary"
                            component="div"
                            onClick={() => setShowAppBar(true)}
                        >
                            <MenuIcon fontSize='small' />
                        </IconButton>
                    </Box>
                </AppBarMenu>
            </AppBarContainer>
        </Paper>
    )
}

export default AppBarDesktop