import React, { FC } from 'react';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { projectColors } from '../../../styles/theme';
import PricingCard from '../PricingCard';
import SectionHeading from '../../atoms/sections';
import { rooms } from '../../../../data';



const Pricing: FC = () => {
    return (
        <Box
            sx={{
                backgroundColor: projectColors.bgsecondary,
            }}
        >
            <Container
                maxWidth="lg"
                sx={{
                    padding: "64px 1rem 0 1rem",
                    marginTop: { xs: "180px", sm: "256px" },
                    backgroundImage: "url(/vectors/bgGrid.svg)",
                    backgroundRepeat: "repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "center"
                }}
            >
                <Grid container spacing={2}
                    sx={{
                        transform: "translateY(-13rem)",
                    }}
                >
                    {rooms.length > 0 ? rooms.map((room, idx) => (
                        <Grid item xs={12} sm={6} md={4} key={"i" + idx}
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                            }}
                        >
                            <PricingCard {...room} />
                        </Grid>
                    )) : <Typography variant="h3">No Available Room At the moment</Typography>}


                </Grid>

                <Box>
                    <SectionHeading
                        head="Quality time is subject to the environment."
                        subHead='What’s away matters as much as what’s around. We have more than just white linen and breakfast.'
                        raised
                    />
                </Box>
            </Container>
        </Box>
    )
}

export default Pricing