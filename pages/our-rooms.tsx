import React from 'react';
import MetaData from '../meta';

import Box from '@mmasco-atoms/Box';
import Container from '@mmasco-atoms/Container';
import TestBox from '@mmasco-atoms/Box/TestBox';

const OurRooms = () => {
    return (
        <Box>
            <MetaData
                title='Nqabanqaba | OurRooms '
                subtitle='The the rooms available at Nqabanqaba bnb.'
                image='https://nqabanqaba.netlify.app/images/im300.jpg' />
            <Container maxWidth="md">
                <TestBox
                    sx={{
                        height: "500px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: { xs: "52px", sm: "32px", md: "45px" },
                        color: { xs: "black", sm: "red", md: "blue" },
                        backgroundColor: { xs: "blue", sm: "purple", md: "silver" },
                    }}
                >
                    Hello world
                </TestBox>

            </Container>
        </Box>
    )
}

export default OurRooms;