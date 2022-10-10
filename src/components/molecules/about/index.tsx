import React from 'react';
import { projectFonts } from '../../../styles/theme';
import Link from 'next/link';
import Typography from '../../atoms/Typography';
import styled from 'styled-components';
import Container from '../../atoms/Container';

const Wrapper = styled(Container)`
`

const Paragraph = styled(Typography)`
    font-size: 20px;
    color: #6A6A6A;
    font-family: ${projectFonts.primary};
    text-align: center;
    /* padding: ; */
`

const HomeABout = () => {
    return (
        <Wrapper
            maxWidth='md'
            sx={{
                padding: 0,
            }}
            sm={{ padding: "1rem" }}
            md={{ paddingRight: '2rem' }}
        >
            <Typography
                variant='h1'
                sx={{
                    fontFamily: projectFonts.secondary,
                    fontSize: '24px',
                    textTransform: 'uppercase',
                    marginBottom: '1rem',
                    textAlign: 'center',
                    fontWeight: '400'
                }}
                sm={{ fontSize: "32px" }}
                md={{ fontSize: "40px" }}
            >
                Softern your night with Nqabanqaba bnb, the bed and breakfast in richards bay meerensee.
            </Typography>
            <Paragraph
                sx={{
                    padding: 0,
                }}
                md={{ padding: "0 2rem" }}
            >
                We are situated 2.7 km from Alkantstrand Beach, Nqabanqaba features accommodation with a shared lounge, a casino and room service for your convenience. The bed and breakfast features both WiFi and private parking free of charge. N.qabanqaba provides guests with a terrace, a seating area, satellite flat-screen TV. We have a fully equipped kitchenette with a microwave and a fridge, and a private bathroom with shower and a hairdryer.The accommodation offers a à la carte or Full English/Irish breakfast.
            </Paragraph>
            <Typography
                variant="h5"
                sx={{
                    fontFamily: projectFonts.primary,
                    fontSize: '18px',
                    fontWeight: 500,
                    mt: 1,
                    mb: 2,
                    textTransform: 'uppercase',
                    margin: '1rem auto',
                    textAlign: 'center'
                }}
            >
                <Link href="/about-us" passHref>
                    <a>Read more about us</a>
                </Link>
            </Typography>
        </Wrapper >
    )
}

export default HomeABout