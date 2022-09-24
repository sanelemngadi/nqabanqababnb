import React, { FC } from 'react';
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";


const Test: FC<{ check?: boolean, num: number }> = ({ check = false, num }) => {
    console.log("check: ", check, " num: ", num);

    return (
        <Box>
            hi this is #{num}
        </Box>
    )
}

const AboutUs: FC = () => {
    return (
        <Box>
            <Container maxWidth="md">
                <Typography variant="h3" component="h2">
                    Ayikapheli but this will be a AboutUs page
                </Typography>
                <Typography variant="h3" component="h2">
                    <Test check num={1} />
                </Typography>
                <Typography variant="h3" component="h2">
                    <Test num={2} />
                </Typography>
            </Container>
        </Box>
    )
}

export default AboutUs