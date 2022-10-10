import React, { FC } from 'react';
import styled from "styled-components";
import Image from 'next/image';
import MetaData from '../meta';
import MiniAround from '../src/components/molecules/miniarounds';
import { Nqabanqaba } from '../src/styled.globals';
import Grid from '../src/components/atoms/Grid';
import Typography from '../src/components/atoms/Typography';
import Box from '../src/components/atoms/Box';
import Container from '../src/components/atoms/Container';


const Paragraph = styled(Nqabanqaba)`
    margin: 1.5rem 0;
    font-size: 16px;
    font-weight: 500;
`

const RuleHeading = styled(Nqabanqaba)`
    margin: 1.5rem 0;
    font-size: 20px;
    color: red;
`

const rules2 = [
    {
        head: "3 Age restriction",
        msg: "There is no age requirement for check-in."
    },
    {
        head: "4 Smoking and/or parties",
        msg: "Both  smoking and parties are not allowed inside the rooms."
    },
    {
        head: "5 Quiet hours",
        msg: "Guests must be quiet between 21:00 and 07:00."
    },
    {
        head: "6 Pets",
        msg: "Pets are not allowed."
    },
]

const abouts = [
    "We are situated 2.7 km from Alkantstrand Beach, Nqabanqaba features accommodation with a shared lounge, a casino and room service for your convenience.", "The bed and breakfast features both WiFi and private parking free of charge. N.qabanqaba provides guests with a terrace, a seating area, satellite flat-screen TV.", "We have a fully equipped kitchenette with a microwave and a fridge, and a private bathroom with shower and a hairdryer. The accommodation offers a à la carte or Full English/Irish breakfast.", "Guests can spend time in the water park or enjoy the outdoor swimming pool and garden at Nqabanqaba.", "Boardwalk Inkwazi Shopping Centre is 6 km from the bed and breakfast, while Enseleni Nature Reserve is 14 km from the property.", "Couples particularly like the location — they rated it 8.9 for a two-person trip."
]

const AboutUs: FC = () => {
    return (
        <Box>
            <>
                <MetaData
                    title='Nqabanqaba B&B | cheap luxury B&B at Richards Bay Meerensee'
                    subtitle='The bed and breakfast features both WiFi and private parking free of charge. Nqabanqaba provides guests with a terrace, a seating area, satellite flat-screen TV. We have a fully equipped kitchenette with a microwave and a fridge, and a private bathroom with shower and a hairdryer. The accommodation offers a à la carte or Full English/Irish breakfast.'
                    path={`/about-us`}
                    image='https://nqabanqaba.netlify.app/images/room3.jpg' />
                <Container
                    maxWidth="lg"
                    sx={{
                        display: 'flex',
                        justifyContent: "flex-start",
                        alignItems: "start",
                        flexDirection: 'column',
                        margin: "0 auto",
                        paddingLeft: '0px',
                        paddingRight: '0px',
                        padding: '1rem 1rem',
                    }}
                    md={{ flexDirection: 'row', padding: '1rem' }}
                >
                    <Box
                        md={{ flex: 3 }}
                    >
                        <Container maxWidth="md">
                            <Typography variant="h1"
                                md={{ fontSize: "48px" }}
                            >
                                About Us
                            </Typography>
                            <>
                                {abouts.map((about, i) => (
                                    <Paragraph key={'about-' + i} variant="p">
                                        {about}
                                    </Paragraph>
                                ))}
                            </>
                            <Typography
                                variant="h1"
                                md={{ fontSize: "48px" }}
                            >
                                House rules
                            </Typography>
                            <Grid container spacing={2}
                            >
                                <Grid item xs={12} medium={6}>
                                    <RuleHeading variant="h2">1 Check in/out hours</RuleHeading>
                                    <Box>
                                        <Image src="/vectors/rules.svg" width={344} height={422} alt='house rules' />
                                    </Box>
                                    <RuleHeading variant="h2">2 Child Policy</RuleHeading>
                                    <Paragraph variant="p">
                                        Children of any age are welcome.
                                    </Paragraph>
                                    <Paragraph variant="p">
                                        Children aged 18 year s and above are considered adults at this property.
                                    </Paragraph>
                                    <Paragraph variant="p">
                                        To see correct prices and occupancy information, please add the number of children in your group and their ages to your search.
                                    </Paragraph>
                                </Grid>
                                <Grid item xs={12} medium={6}>
                                    {rules2.map((rule, idx) => (
                                        <React.Fragment key={idx + 'rule'}>
                                            <RuleHeading variant="h2">{rule.head}</RuleHeading>
                                            <Paragraph variant="p">
                                                {rule.msg}
                                            </Paragraph>
                                        </React.Fragment>
                                    ))}
                                </Grid>
                            </Grid>
                        </Container>

                    </Box >
                    <Box
                        sx={{
                            position: 'sticky',
                            top: '96px'
                        }}
                        md={{ flex: 1 }}
                    >
                        <MiniAround />
                    </Box>
                </Container >
            </>
        </Box >
    )
}

export default AboutUs