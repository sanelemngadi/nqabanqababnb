import React, { FC } from 'react';
import { projectColors, projectFonts } from '../../../styles/theme';
import Heading from '../../atoms/hero/Heading';
import { TextShadow } from '../../../styles/hero';
import CheckAvailability from './book/CheckAvailability';

import Box from '@mmasco-atoms/Box';
import Paper from '@mmasco-atoms/Paper';
import Container from '@mmasco-atoms/Container';





const Hero: FC = () => {

    return (
        <Box
            sx={{
                backgroundColor: projectColors.primary,
                backgroundImage: "url('/images/park.jpg')",
                backgroundRepeat: "no-repeat",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                minHeight: 'calc(100vh - 48px - 48px)',
                padding: '1rem',
                overflowX: 'hidden',
                display: "flex",
                justifyContent: 'center',
                alignItems: 'center'
            }}
            md={{
                backgroundColor: projectColors.primary,
                minHeight: 'calc(100vh - 80px - 40px)',
            }}
        >
            <Container maxWidth="md"
            >
                <Heading />
                <TextShadow
                    variant="h4"
                    sx={{
                        color: '#D7D7D7',
                        maxWidth: "768px",
                        textAlign: "center",
                        margin: "0 auto",
                        fontSize: "30px",
                        fontWeight: 400,
                        marginTop: "0px",
                        marginBottom: '3rem'
                    }}
                >
                    Best BnB in Richards Bay that offers more than comfort and quility sleep.
                </TextShadow>
                <Paper
                    elevation={3}
                    sx={{
                        backgroundColor: "#EFEFEF",
                        padding: "4px",
                        borderRadius: 0,
                        overflow: "hidden",
                    }}

                    md={{ padding: "2rem" }}
                >
                    <CheckAvailability />
                </Paper>
                <TextShadow
                    sx={{
                        textAlign: "center",
                        color: projectColors.bgsecondary,
                        fontSize: "14px",
                        fontFamily: projectFonts.primary,
                        display: "none",
                        marginTop: "32px"
                    }}
                    md={{ display: 'block' }}
                >Please note that no pats are allowed at nqabanqaba bnb..</TextShadow>
            </Container>
        </Box >
    )
}

export default Hero