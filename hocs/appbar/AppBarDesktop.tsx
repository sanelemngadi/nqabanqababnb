import React, { FC, useEffect, useState } from 'react';
import { AppBarButtons, UnOrderedList, AllScreenLogo, AppBarMenu, AppBarContainer } from '../../src/styles/appbar';

import { projectColors, projectFonts } from '../../src/styles/theme';
import { slugify } from '../../src/utils';

import ActiveLink from '../../src/context/ActiveLink';

import { FaqsButtonComponent, LogoComponent } from '../navigationComponents';
import { useRouter } from 'next/router';

import Paper from "@mmasco-atoms/Paper";
import Button from "@mmasco-atoms/Button";
import Typography from "@mmasco-atoms/Typography";
import Box from "@mmasco-atoms/Box";
import IconButton from "@mmasco-atoms/IconButton";

import { FiArrowUpRight, FiHelpCircle, FiMenu } from "react-icons/fi"
import styled from 'styled-components';
import ListItem from '@mmasco-atoms/ListItem';


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
                <AllScreenLogo><LogoComponent /></AllScreenLogo>
                <UnOrderedList>
                    {links.map((link, idx) => (
                        <ListItem key={"i-" + idx}>
                            <ActiveLink
                                href={link === "Home" ? "/" : `/${slugify(link)}`}
                                link={link}
                            />
                        </ListItem>
                    ))}
                </UnOrderedList>

                <AppBarButtons>
                    <FaqsButtonComponent
                        setShowFaqsModal={() => setShowFaqsModal(true)}
                        ico={<FiHelpCircle size={24} />}
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
                        <Icon><FiArrowUpRight size={24} /></Icon>
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
                            <FiHelpCircle size={24} />
                        </IconButton>

                    </Box>
                    {/* ///////////////////////// */}

                    <Box>
                        <IconButton
                            onClick={() => setShowAppBar(true)}
                        >
                            <FiMenu size={24} />
                        </IconButton>
                    </Box>
                </AppBarMenu>
            </AppBarContainer>
        </Paper >
    )
}

export default AppBarDesktop