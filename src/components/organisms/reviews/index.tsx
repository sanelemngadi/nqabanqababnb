import React from 'react';
import SectionHeading from '../../atoms/sections';

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import ReviewsTab from './rewiewsTab';

const Ratings = () => {
    return (
        <Box
        >
            <Container
                sx={{
                    paddingTop: { xs: "32px", md: "64px" },
                    px: 0,
                }}
            >
                <SectionHeading
                    head='What our guest says about Us!'
                    subHead='We really love the feedback we get from our guests, it motivates us to keep going and improve on our services.'
                />
            </Container>
            <ReviewsTab />
        </Box>
    )
}

export default Ratings