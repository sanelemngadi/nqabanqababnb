import React from 'react';
import { Headings, ItemGrid, MapLink } from '../../src/styles/footer';
import { projectColors } from '../../src/styles/theme';

import TextIcon from '../../src/components/molecules/TextIcon';
import Link from 'next/link';
import { slugify } from '../../src/utils';

import Box from '@mmasco-atoms/Box';
import Grid from '@mmasco-atoms/Grid';
import Typography from '@mmasco-atoms/Typography';
import Container from '@mmasco-atoms/Container';

import { GoLocation, GoMail } from "react-icons/go";
import { BsTelephone } from "react-icons/bs";
import { MdOutlineHorizontalRule } from "react-icons/md";


const links = [
    "Home", "Our Room", "About Us", "Contact Us"
]
const Footer = () => {
    return (
        <Box
            sx={{
                padding: "48px 0 16px 0",
                backgroundColor: projectColors.primary
            }}
            md={{ padding: "96px 0 16px 0" }}
        >
            <Container
                sx={{
                    backgroundColor: projectColors.primary
                }}
            >
                <Grid container spacing={3}>
                    <ItemGrid item xs={12} medium={4}>
                        <Headings>About Us</Headings>
                        <Typography sx={{ color: projectColors.grayD9 }}>
                            Situated in Richards Bay, 2.7 km from Alkantstrand Beach and 6 km from Boardwalk Inkwazi Shopping Centre, Nqabanqaba features accommodation with free WiFi...
                        </Typography>
                    </ItemGrid>
                    <ItemGrid item xs={12} medium={4}>
                        <Headings>Opening hours</Headings>
                        <Typography
                            sx={{ color: '#fff' }}
                        >24/7</Typography>
                        <br />
                        <Headings>Site Map</Headings>
                        <>
                            {links.map((link, idx) => (
                                <Link
                                    href={link === "Home" ? "/" : `/${slugify(link)}`}
                                    prefetch={false}
                                    key={"i" + idx}
                                    passHref>
                                    <MapLink>{link}</MapLink>
                                </Link>
                            ))}
                        </>
                    </ItemGrid>
                    <ItemGrid item xs={12} medium={4}>
                        <Headings>Contact info</Headings>
                        <TextIcon
                            bg={projectColors.primary}
                            color={projectColors.grayD9}
                            label='64 Marlynhoek Meer en see, Richards Bay,3901, South Africa'
                            elem={<GoLocation color={projectColors.grayD9} size={24} />}
                        />
                        <TextIcon
                            bg={projectColors.primary}
                            color={projectColors.grayD9}
                            label='nqabanqaba2105@gmail.com'
                            elem={<GoMail color={projectColors.grayD9} size={24} />}
                        />
                        <TextIcon
                            bg={projectColors.primary}
                            color={projectColors.grayD9}
                            label='(+27) 662 971 030'
                            elem={<BsTelephone color={projectColors.grayD9} size={24} />}
                        />
                    </ItemGrid>

                </Grid>
                <Box>
                    <Typography
                        sx={{
                            color: "#888888",
                            fontSize: "14px",
                            display: "flex",
                            alignItems: "center"
                        }}
                    ><MdOutlineHorizontalRule size={24} />
                        <>&nbsp;© {new Date().getFullYear()} Nqabanqaba. All rights reserved.</>
                    </Typography>
                </Box>
            </Container >
        </Box >
    )
}

export default Footer