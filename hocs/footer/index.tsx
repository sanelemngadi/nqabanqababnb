import React from 'react';
import { FooterWrapper, Headings, ItemGrid, MapLink } from '../../src/styles/footer';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import { projectColors } from '../../src/styles/theme';
import EmailBox from '../../src/components/molecules/EmailBox';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneEnabledIcon from '@mui/icons-material/PhoneEnabled';
import TextIcon from '../../src/components/molecules/TextIcon';
import Link from 'next/link';
import { slugify } from '../../src/utils';


const links = [
    "Home", "Pricing", "About Us", "Contact Us"
]
const Footer = () => {
    return (
        <Box
            sx={{
                padding: { xs: "48px 0 16px 0", md: "96px 0 16px 0" },
                backgroundColor: projectColors.primary
            }}
        >
            <FooterWrapper>
                <Grid container spacing={3}>
                    <ItemGrid item xs={12} md={4}>
                        <Headings>About Us</Headings>
                        <Typography sx={{ color: projectColors.grayD9 }}>
                            Situated in Richards Bay, 2.7 km from Alkantstrand Beach and 6 km from Boardwalk Inkwazi Shopping Centre, Nqabanqaba features accommodation with free WiFi...
                        </Typography>
                    </ItemGrid>
                    <ItemGrid item xs={12} md={4}>
                        <Headings>Opening hours</Headings>
                        <Typography>24/7</Typography>
                        <br />
                        <Headings>Site Map</Headings>
                        {links.map((link, idx) => (
                            <Link href={slugify(link)} key={"i" + idx} passHref>
                                <MapLink>{link}</MapLink>
                            </Link>
                        ))}
                    </ItemGrid>
                    <ItemGrid item xs={12} md={4}>
                        <Headings>Contact info</Headings>
                        <TextIcon
                            bg={projectColors.primary}
                            color={projectColors.grayD9}
                            label='64 Marlynhoek Meer en see, Richards Bay,3901, South Africa'
                            elem={<LocationOnIcon
                                sx={{
                                    color: projectColors.grayD9
                                }} />}
                        />
                        <EmailBox bg={projectColors.primary} color={projectColors.grayD9} />
                        <TextIcon
                            bg={projectColors.primary}
                            color={projectColors.grayD9}
                            label='+27607013296'
                            elem={<PhoneEnabledIcon
                                sx={{
                                    color: projectColors.grayD9
                                }} />}
                        />
                    </ItemGrid>

                </Grid>
                <Box>
                    <Typography
                        sx={{
                            color: projectColors.grayD9
                        }}
                    >© {new Date().getFullYear()} Nqabanqaba. All rights reserved.</Typography>
                </Box>
            </FooterWrapper >
        </Box >
    )
}

export default Footer