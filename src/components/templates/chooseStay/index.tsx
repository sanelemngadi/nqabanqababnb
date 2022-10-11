import React from 'react';
import HomeABout from '../../molecules/about';
import ImagesGallery from '../../molecules/minigallery';

import Box from '@mmasco-atoms/Box';
import Container from '@mmasco-atoms/Container';

const ChooseStay = () => {
    return (
        <Box
            sx={{
                margin: "2rem auto",
            }}
            md={{ margin: "96px auto" }}
        >
            <Container
                maxWidth="lg"
                sx={{
                    margin: "0rem auto",
                    paddingTop: '1rem',
                    paddingBottom: '1rem',
                }}
                sm={{
                    paddingLeft: '0px',
                    paddingRight: '0px',
                }}
                md={{
                    paddingLeft: '1rem',
                    paddingRight: '1rem',
                }}
            >
                <HomeABout />
                <ImagesGallery />
            </Container>
        </Box>
    )
}

export default ChooseStay