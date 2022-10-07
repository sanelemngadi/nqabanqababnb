import React from 'react';
import styled from '@emotion/styled';
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { projectFonts } from '../../../styles/theme';
import Link from 'next/link';

const Wrapper = styled(Box)`
`

const Paragraph = styled(Typography)`
    font-size: 20px;
    color: #6A6A6A;
    font-family: ${projectFonts.primary};
`

const HomeABout = () => {
    return (
        <Wrapper
            sx={{
                paddingRight: { md: '2rem' },
                padding: { sm: '1rem' },
                maxWidth: '728px'
            }}
        >
            <Typography
                variant='h1'
                sx={{
                    fontFamily: projectFonts.secondary,
                    fontSize: '24px',
                    textTransform: 'uppercase',
                    marginBottom: { xs: '1rem' }
                }}
            >
                Softern your night with Nqabanqaba bnb, the bed and breakfast in richards bay meerensee.
            </Typography>
            <Paragraph>
                We are situated 2.7 km from Alkantstrand Beach, Nqabanqaba features accommodation with a shared lounge, a casino and room service for your convenience.
            </Paragraph>
            <Paragraph
                sx={{
                    display: { xs: 'none', sm: 'block' }
                }}
            >
                The bed and breakfast features both WiFi and private parking free of charge. N.qabanqaba provides guests with a terrace, a seating area, satellite flat-screen TV
                .
            </Paragraph>
            <Paragraph
                sx={{
                    display: { xs: 'none', md: 'block' }
                }}
            >
                We have a fully equipped kitchenette with a microwave and a fridge, and a private bathroom with shower and a hairdryer.The accommodation offers a à la carte or Full English/Irish breakfast.
            </Paragraph>
            <Typography
                variant="h5"
                sx={{
                    fontFamily: projectFonts.primary,
                    fontSize: '18px',
                    fontWeight: 500,
                    mt: 1,
                    mb: 2,
                    textTransform: 'uppercase'
                }}
            >
                <Link href="#" passHref>
                    <a>Read more about us</a>
                </Link>
            </Typography>
        </Wrapper >
    )
}

export default HomeABout