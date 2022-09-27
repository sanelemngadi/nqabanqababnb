import React from 'react';
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import CollegeSwiper from '../src/components/imagesCollegeSwipper';

const pricing = () => {
    return (
        <Box>

            <CollegeSwiper />
            <Container maxWidth="md">
                <Typography variant="h3" component="h2">
                    Simulate Detail page
                </Typography>
            </Container>
        </Box>
    )
}

export default pricing