import React, { FC } from 'react';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { projectColors } from '../../../styles/theme';
import PricingCard from '../PricingCard';
import { rooms } from '../../../../data';



const Pricing: FC = () => {
    return (
        <Box
            sx={{
                background: `linear-gradient(180deg, #fff 25%, ${projectColors.bgsecondary})`,
                paddingBottom: { xs: "32px", sm: "64px", md: "96px" },
            }}
        >
            <Container
                maxWidth="lg"
                sx={{
                    padding: "0px 1rem",
                    backgroundImage: "url(/vectors/bgGrid.svg)",
                    backgroundRepeat: "repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                <Grid container spacing={2}>
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
            </Container>
        </Box>
    )
}

export default Pricing