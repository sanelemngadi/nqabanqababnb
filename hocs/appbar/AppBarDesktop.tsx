import Image from 'next/image';
import React from 'react';
import { AppBarContainer, AppBarLogo, LinkItems, AppBarButtons } from '../../src/styles/appbar';
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import ListItemButton from "@mui/material/ListItemButton";

import { ListItemText } from "@mui/material";
import Link from 'next/link';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';

import styled from "@emotion/styled";
import { projectColors, projectFonts } from '../../src/styles/theme';


const slugify = (word: string): string => {
    return word.trim().toLowerCase().replaceAll(" ", '-');
};

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
    return (
        <Paper
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
                <AppBarLogo>
                    <Button color="primary" component="a">
                        <Image src={"/vectors/logo.svg"} width={128} height={32} layout="fixed" alt="nqabanqaba logo" />
                    </Button>
                </AppBarLogo>
                <LinkItems type={"row"}>
                    {links.map((link, idx) => (
                        <Link
                            key={"i-" + idx}
                            href={link === "Home" ? "/" : `/${slugify(link)}`}
                            passHref>
                            <ListItemButton sx={{ paddingLeft: "0px", paddingRight: "0px" }}>
                                <ListItemText primary={link}
                                    sx={{
                                        width: "96px",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        fontFamily: projectFonts.primary
                                    }}
                                />
                            </ListItemButton></Link>
                    ))}
                </LinkItems>

                <AppBarButtons type={"row"}>
                    <Button variant="outlined"
                        sx={{
                            marginRight: "16px",
                            backgroundColor: projectColors.bgsecondary,
                            color: projectColors.tertiary
                        }}>
                        <Typography variant="h6" sx={{
                            fontSize: "14px",
                            lineHeight: "1.5",
                        }}>FAQs</Typography>
                        <Icon><HelpOutlineIcon /></Icon></Button>
                    <Button variant="contained"
                        sx={{
                            backgroundColor: projectColors.tertiary,
                            color: projectColors.bgsecondary
                        }}
                    >
                        <Typography variant="h6"
                            sx={{
                                fontSize: "14px",
                                lineHeight: "1.5"
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