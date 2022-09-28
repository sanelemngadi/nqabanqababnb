import React from 'react';
import { AppBarContainer, AppBarLogo, LinkItems, AppBarButtons } from '../../src/styles/appbar';
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import ListItemButton from "@mui/material/ListItemButton";

import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';

import styled from "@emotion/styled";
import { projectColors } from '../../src/styles/theme';
import { slugify } from '../../src/utils';

import CancelIcon from '@mui/icons-material/Cancel';
import { useFaqsContext } from '../../src/context';
import ActiveLink from '../../src/context/ActiveLink';

import { FaqsButtonComponent, ListTextComponent, LogoComponent } from '../navigationComponents';
import { useRouter } from 'next/router';


const links = [
    "Home", "Pricing", "About Us", "Contact Us"
]

const Icon = styled(Box)`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 8px;
`

const AppBarDesktop = () => {
    const { vals, setValue } = useFaqsContext();
    const router = useRouter();
    const today = new Date().toISOString().split('T')[0];
    return (
        <Paper
            elevation={4}
            sx={{
                backgroundColor: projectColors.light,
                position: "sticky !important",
                top: 0,
                left: 0,
                zIndex: '1999',
            }}
        >
            <AppBarContainer
                maxWidth={"lg"}
            >
                <AppBarLogo
                    elevation={vals ? 0 : 2}
                >
                    <LogoComponent vals={vals} />
                </AppBarLogo>
                <LinkItems type={"row"}>
                    {links.map((link, idx) => (
                        <ActiveLink
                            key={"i-" + idx}
                            href={link === "Home" ? "/" : `/${slugify(link)}`}
                        >
                            <ListItemButton
                                disabled={vals}
                                sx={{
                                    paddingLeft: "0px", paddingRight: "0px"
                                }}>
                                <ListTextComponent link={link} />
                            </ListItemButton>
                        </ActiveLink>
                    ))}
                </LinkItems>

                <AppBarButtons type={"row"}>
                    {
                        vals ?
                            <FaqsButtonComponent
                                setValue={() => setValue(false)}
                                vals={vals}
                                ico={<CancelIcon />}
                            />
                            :
                            <FaqsButtonComponent
                                setValue={() => setValue(true)}
                                vals={vals}
                                ico={<HelpOutlineIcon />}
                            />
                    }
                    <Button
                        variant="contained"
                        disabled={vals}
                        sx={{
                            backgroundColor: projectColors.tertiary,
                            color: projectColors.bgsecondary
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
            </AppBarContainer>
        </Paper>
    )
}

export default AppBarDesktop