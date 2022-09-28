import React from 'react';
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import TextIcon from '../../src/components/molecules/TextIcon';
import { projectColors, projectFonts } from '../../src/styles/theme';

import FamilyRestroomIcon from '@mui/icons-material/FamilyRestroom';
import NightShelterIcon from '@mui/icons-material/NightShelter';
import HotelIcon from '@mui/icons-material/Hotel';
import BathtubIcon from '@mui/icons-material/Bathtub'; import CheckAvailabilityPricing from '../../src/components/templates/hero/book/CheckAvailibilityPricing';
import RoomDetailSlide from '../../src/components/molecules/room-detail';
;

import { useRouter } from 'next/router';
import { rooms } from '../../data';
import { slugify } from '../../src/utils';
import MetaData from '../../meta';

const Detail = ({ }) => {
    const router = useRouter();
    const { detail } = router.query;
    const detail_room = rooms.filter((i) => slugify(i.label) === detail)[0];



    return (
        <Box>
            <MetaData
                title={`Nqabanqaba | ${detail_room}`}
                subtitle={detail_room.description}
                image={`https://nqabanqaba.netlify.app${detail_room.image}`} />
            <Box>
                <RoomDetailSlide />
            </Box>
            <Container
                sx={{
                    marginTop: '64px',
                    position: 'relative',
                }}
            >
                <Grid container spacing={3}>
                    <Grid item xs={12} md={8}
                        sx={{
                            paddingRight: { md: '2rem' },
                        }}
                    >
                        <TextIcon
                            bg={projectColors.light}
                            color={projectColors.tertiary}
                            label='64 Marlynhoek Meer-en-see'
                            fs='18px'
                            width='300px'
                            elem={<LocationOnIcon
                                sx={{
                                    color: projectColors.tertiary
                                }} />}
                        />
                        <Typography
                            variant='h1'
                            sx={{
                                fontFamily: projectFonts.secondary,
                                fontSize: '48px',
                                maxWidth: "768px",
                                margin: "1rem 0"
                            }}
                        >{detail_room.label}</Typography>
                        <Typography
                            variant='h5' component='h3'
                            sx={{
                                textTransform: 'uppercase',
                                color: projectColors.grey,
                            }}
                        >Self Catering</Typography>
                        <Box sx={{
                            display: 'flex',
                            gap: { xs: "8px", md: '1rem' },
                            flexWrap: 'wrap'
                        }}>
                            <TextIcon
                                bg={projectColors.light}
                                color={projectColors.tertiary}
                                label='3 Guests'
                                width='100px'
                                elem={<FamilyRestroomIcon
                                    sx={{
                                        color: projectColors.tertiary
                                    }} />}
                            />
                            <TextIcon
                                bg={projectColors.light}
                                color={projectColors.tertiary}
                                label='1 Bedroom'
                                width='120px'
                                elem={<NightShelterIcon
                                    sx={{
                                        color: projectColors.tertiary
                                    }} />}
                            />
                            <TextIcon
                                bg={projectColors.light}
                                color={projectColors.tertiary}
                                label='2 Beds'
                                width='100px'
                                elem={<HotelIcon
                                    sx={{
                                        color: projectColors.tertiary
                                    }} />}
                            />
                            <TextIcon
                                bg={projectColors.light}
                                color={projectColors.tertiary}
                                label='1 Bath'
                                width='100px'
                                elem={<BathtubIcon
                                    sx={{
                                        color: projectColors.tertiary
                                    }} />}
                            />
                        </Box>

                        <Typography
                            sx={{
                                margin: '1rem 0',
                                color: projectColors.grey
                            }}
                        >
                            {detail_room.description}
                        </Typography>

                        <Typography
                            variant='h6' component='h4'
                            sx={{
                                textTransform: 'uppercase',
                                color: projectColors.primary,
                                fontFamily: projectFonts.primary,
                                fontSize: '16px'
                            }}
                        >The Sorrounding</Typography>

                        <Typography
                            sx={{
                                margin: '0rem 0',
                                color: projectColors.grey,
                                marginBottom: "1rem"
                            }}
                        >
                            Every amenity you might possibly require to enjoy your stay is provided in our garden apartment. Very comfortable for a small family or couples, but there is also enough room for a singles. It  will take a short trip to the beach and many more great Richards Bay attractions.
                        </Typography>
                        <Divider />
                        <Typography
                            variant='h6' component='h4'
                            sx={{
                                textTransform: 'uppercase',
                                color: projectColors.primary,
                                fontFamily: projectFonts.primary,
                                fontSize: '16px',
                                marginTop: '1rem'
                            }}
                        >Main Amenities</Typography>



                        <Box sx={{
                            display: 'flex',
                            gap: '1rem',
                            ['ul']: {
                                padding: { xs: '1rem', md: '40px' },
                                flex: 1,
                                margin: 0,
                            }
                        }}>
                            <ul>
                                <li>Bathroom amenities</li>
                                <li>Wireless internet connection</li>
                                <li>Ceiling fan</li>
                                <li>Coffee/Tea maker</li>
                                <li>Colour Television</li>
                                <li>DSTV/ Satellite television</li>
                                <li>Hairdryer</li>
                                <li>Iron</li>
                            </ul>
                            <ul>
                                <li>Ironing board</li>
                                <li>Kitchenette</li>
                                <li>Microwave</li>
                                <li>Minibar</li>
                                <li>Non-smoking</li>
                                <li>Refrigerator</li>
                                <li>Shower only</li>
                            </ul>
                        </Box>


                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Box
                            sx={{
                                background: 'blue',
                                position: { xs: 'relative', md: 'sticky' },
                                top: { md: "128px" },
                                marginBottom: "2rem"
                            }}
                        >
                            <CheckAvailabilityPricing sm />
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}

export default Detail;