import React from 'react';
import Box from '../../atoms/Box';
import Container from '../../atoms/Container';
import SectionHeading from '../../atoms/sections';

// import Box from "@mui/material/Box";
// import Container from "@mui/material/Container";
// import ReviewsTab from './rewiewsTab';

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