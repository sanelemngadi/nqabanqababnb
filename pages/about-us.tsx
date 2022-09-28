import React, { FC, useState, useEffect } from 'react';
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { projectColors, projectFonts } from '../src/styles/theme';
import styled from "@emotion/styled"; import Image from 'next/image';
import MetaData from '../meta';
;


const Paragraph = styled(Typography)`
    margin: 1.5rem 0;
    font-size: 16px;
    font-weight: 500;
    font-family: ${projectFonts.primary};
`

const RuleHeading = styled(Typography)`
    margin: 1.5rem 0;
    font-size: 20px;
    font-family: ${projectFonts.secondary};
`

const AboutUs: FC = () => {
    return (
        <Box>
            <MetaData
                title='Nqabanqaba | About Us'
                subtitle='We are situated 2.7 km from Alkantstrand Beach, Nqabanqaba features accommodation with a shared lounge, a casino and room service for your convenience.'
                image='https://nqabanqaba.netlify.app/images/room3.jpg' />
            <Container maxWidth="md">
                <Typography variant="h1"
                    sx={{
                        fontSize: { xs: "32px", md: "48px" },
                        fontFamily: projectFonts.secondary,
                        color: projectColors.primary,
                        marginTop: "2rem"
                    }}
                >
                    About Us
                </Typography>
                <Paragraph variant="body1">
                    We are situated 2.7 km from Alkantstrand Beach, Nqabanqaba features accommodation with a shared lounge, a casino and room service for your convenience.
                </Paragraph>
                <Paragraph variant="body1">
                    The bed and breakfast features both WiFi and private parking free of charge. N.qabanqaba provides guests with a terrace, a seating area, satellite flat-screen TV
                </Paragraph>
                <Paragraph variant="body1">
                    We have a fully equipped kitchenette with a microwave and a fridge, and a private bathroom with shower and a hairdryer. The accommodation offers a à la carte or Full English/Irish breakfast.

                </Paragraph>
                <Paragraph variant="body1">
                    Guests can spend time in the water park or enjoy the outdoor swimming pool and garden at Nqabanqaba.
                </Paragraph>
                <Paragraph variant="body1">
                    Boardwalk Inkwazi Shopping Centre is 6 km from the bed and breakfast, while Enseleni Nature Reserve is 14 km from the property.
                </Paragraph>
                <Paragraph variant="body1">
                    Couples particularly like the location — they rated it 8.9 for a two-person trip.
                </Paragraph>



                <Typography variant="h1"
                    sx={{
                        fontSize: { xs: "32px", md: "48px" },
                        fontFamily: projectFonts.secondary,
                        color: projectColors.primary,
                        marginTop: "2rem"
                    }}
                >
                    House rules
                </Typography>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <RuleHeading>1 Check in/out hours</RuleHeading>
                        <Box>
                            <Image src="/vectors/rules.svg" width={344} height={422} />
                        </Box>
                        <RuleHeading>2 Child Policy</RuleHeading>
                        <Paragraph variant="body1">
                            Children of any age are welcome.
                        </Paragraph>
                        <Paragraph variant="body1">
                            Children aged 18 years and above are considered adults at this property.
                        </Paragraph>
                        <Paragraph variant="body1">
                            To see correct prices and occupancy information, please add the number of children in your group and their ages to your search.
                        </Paragraph>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <RuleHeading>3 Age restriction</RuleHeading>
                        <Paragraph variant="body1">
                            There is no age requirement for check-in.
                        </Paragraph>

                        <RuleHeading>4 Smoking and/or parties</RuleHeading>
                        <Paragraph variant="body1">
                            Both  smoking and parties are not allowed inside the rooms.
                        </Paragraph>

                        <RuleHeading>5 Quiet hours</RuleHeading>
                        <Paragraph variant="body1">
                            Guests must be quiet between 21:00 and 07:00.
                        </Paragraph>

                        <RuleHeading>6 Pets</RuleHeading>
                        <Paragraph variant="body1">
                            Pets are not allowed.
                        </Paragraph>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}

export default AboutUs