import React from 'react';
import HomeABout from '../../molecules/about';
import ImagesGallery from '../../molecules/minigallery';

import Box from '@mmasco-atoms/Box';
import Container from '@mmasco-atoms/Container';

const ChooseStay = () => {
    return (
        <Box
            sx={{
                margin: { xs: "2rem auto", md: "96px auto" },
            }}
        >
            <Container
                maxWidth="lg"
                sx={{
                    margin: "1rem auto",
                    paddingTop: '1rem',
                    paddingBottom: '1rem',
                    paddingLeft: { xs: 0, md: "1rem" },
                    paddingRight: { xs: 0, md: "1rem" },
                }}
            >
                <HomeABout />
                <ImagesGallery />
            </Container>
        </Box>
    )
}

export default ChooseStay