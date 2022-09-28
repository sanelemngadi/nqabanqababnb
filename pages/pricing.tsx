import React from 'react';
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import CollegeSwiper from '../src/components/imagesCollegeSwipper';
import MetaData from '../meta';

const pricing = () => {
    return (
        <Box>
            <MetaData
                title='Nqabanqaba | Pricing '
                subtitle='The the rooms available at Nqabanqaba bnb.'
                image='https://nqabanqaba.netlify.app/images/im300.jpg' />

            <CollegeSwiper />
            <Container maxWidth="md">

            </Container>
        </Box>
    )
}

export default pricing;