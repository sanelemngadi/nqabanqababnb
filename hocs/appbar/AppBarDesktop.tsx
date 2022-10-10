import React, { FC, useEffect, useState } from 'react';
import { LinkItems, AppBarButtons, UnOrderedList, AllScreenLogo, AppBarMenu, AppBarContainer } from '../../src/styles/appbar';
// import {  } from '../../src/styles/appbar/system';
// import Paper from "@mui/material/Paper";

//material ui icons
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import MenuIcon from '@mui/icons-material/Menu';

import styled from "@emotion/styled";
import { projectColors, projectFonts } from '../../src/styles/theme';
import { slugify } from '../../src/utils';

import ActiveLink from '../../src/context/ActiveLink';

import { FaqsButtonComponent, ListTextComponent, LogoComponent } from '../navigationComponents';
import { useRouter } from 'next/router';
import Button from '../../src/components/atoms/Button';
import Typography from '../../src/components/atoms/Typography';
import Box from '../../src/components/atoms/Box';
import IconButton from '../../src/components/atoms/IconButton';
import Paper from '../../src/components/atoms/Paper';


const links = [
    "Home", "Our Rooms", "About Us", "Contact Us"
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
    const [elevateAppbar, setElevateAppbar] = useState(false)
    const router = useRouter();
    const today = new Date().toISOString().split('T')[0];

    const handleScroll = (): void => {
        if (window.scrollY > 100) {
            setElevateAppbar(true);
        } else {
            setElevateAppbar(false);

        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, [])




    return (
        <Paper
            className="paperdesktop"
            elevation={elevateAppbar ? 4 : 0}
            sx={{
                backgroundColor: projectColors.light,
                position: "sticky !important",
                top: 0,
                left: 0,
                zIndex: '200',
                borderRadius: 0
            }}
        >
            <AppBarContainer>
                <AllScreenLogo
                >
                    <LogoComponent />
                </AllScreenLogo>




                <UnOrderedList>
                    {links.map((link, idx) => (
                        <LinkItems key={"i-" + idx}>
                            <ActiveLink
                                href={link === "Home" ? "/" : `/${slugify(link)}`}
                            >
                                <Button
                                    type='button'
                                    component={'a'}
                                    sx={{
                                        display: "flex",
                                        fontWeight: 500,
                                        minWidth: '96px',
                                        alignItems: "center",
                                        padding: ".3rem 1rem",
                                        textDecoration: 'none',
                                        justifyContent: "center",
                                        color: projectColors.primary,
                                        fontFamily: projectFonts.primary,
                                        transitiom: 'transform 0.2s ease-in-out',

                                        ['&:active']: {
                                            transform: 'scale(0.95)',
                                            transitiom: 'transform 0.2s ease-in-out',
                                        }
                                    }}

                                >
                                    {link}
                                </Button>
                            </ActiveLink>
                        </LinkItems>
                    ))}
                </UnOrderedList>

                <AppBarButtons>
                    <FaqsButtonComponent
                        setShowFaqsModal={() => setShowFaqsModal(true)}
                        ico={<HelpOutlineIcon fontSize='small' />}
                    />

                    <Button
                        variant="contained"
                        type='button'
                        onClick={() => { return router.push(`https://book.nightsbridge.com/32135?action=2&nbid=952&bbrtid=0&rtgroupid=0&startdate=${today}&enddate=${today}`) }}
                        sx={{
                            backgroundColor: projectColors.tertiary,
                            color: projectColors.bgsecondary,
                            borderRadius: 0,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-around',
                            minWidth: '164px',
                            border: "2px solid transparent"
                        }}
                    >
                        <Typography
                            variant="h6"
                            sx={{
                                fontSize: "14px",
                                lineHeight: "1.5",
                                fontFamily: projectFonts.primary,
                                fontWeight: 500
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
                            sx={{
                                color: projectColors.tertiary
                            }}
                        // size='small'
                        >
                            <HelpOutlineIcon />
                        </IconButton>

                    </Box>
                    {/* ///////////////////////// */}

                    <Box>
                        <IconButton
                            onClick={() => setShowAppBar(true)}
                        >
                            <MenuIcon fontSize='small' />
                        </IconButton>
                    </Box>
                </AppBarMenu>
            </AppBarContainer>
        </Paper >
    )
}

export default AppBarDesktop