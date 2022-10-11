import React from 'react';

import Box from '@mmasco-atoms/Box';
import Container from '@mmasco-atoms/Container';
import SectionHeading from '@mmasco-atoms/sections';

const Ratings = () => {
    return (
        <Box
        >
            <Container
                sx={{
                    paddingTop: "32px",
                    px: 0,
                }}
                md={{ marginTop: "64px" }}
            >
                <SectionHeading
                    head='What our guest says about Us!'
                    subHead='We really love the feedback we get from our guests, it motivates us to keep going and improve on our services.'
                />
            </Container>
            {/* <ReviewsTab /> */}
        </Box>
    )
}

export default Ratings