import React, { FC } from 'react';

// import Box from "@mui/material/Box";
// import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
// import Container from "@mui/material/Container";
import HotelIcon from '@mui/icons-material/Hotel';
// import Typography from "@mui/material/Typography";
import BathtubIcon from '@mui/icons-material/Bathtub';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import TextIcon from '../../src/components/molecules/TextIcon';
import NightShelterIcon from '@mui/icons-material/NightShelter';
import FamilyRestroomIcon from '@mui/icons-material/FamilyRestroom';


import MetaData from '../../meta';
import { rooms } from '../../data';
import { slugify } from '../../src/utils';
import { projectColors, projectFonts } from '../../src/styles/theme';
import RoomDetailSlide from '../../src/components/molecules/room-detail';
import CheckAvailabilityPricing from '../../src/components/templates/hero/book/CheckAvailibilityPricing';
import Box from '../../src/components/atoms/Box';
import Container from '../../src/components/atoms/Container';
import Grid from '../../src/components/atoms/Grid';
import Typography from '../../src/components/atoms/Typography';
// import { stringify } from 'querystring';
// ;


interface RoomI {
    label: string,
    description: string,
    max: string,
    image: string
}

interface Props {
    nqabanqabaRooms: RoomI,
}

const Detail: FC<Props> = ({ nqabanqabaRooms }) => {
    const icons = [
        { label: "3 Guests", elem: FamilyRestroomIcon },
        { label: "1 Bedroom", elem: NightShelterIcon },
        { label: "2 Beds", elem: HotelIcon },
        { label: "1 Bath", elem: BathtubIcon },
    ];

    return (
        <Box>
            <MetaData
                title={`Nqabanqaba BnB | ${nqabanqabaRooms.label} at Richards Bay Meerensee`}
                subtitle={nqabanqabaRooms.description}
                image={`https://nqabanqaba.netlify.app${nqabanqabaRooms.image}`}
                path={`/room-detail/${slugify(nqabanqabaRooms.label)}`}
            />
            <Box
                sx={{
                    marginBottom: "1rem"
                }}
            >
                <RoomDetailSlide />
            </Box>
            <Container
                maxWidth="lg"
                sx={{
                    marginTop: '64px',
                    position: 'relative',
                }}
            >
                <Grid container spacing={0}>
                    <Grid item xs={12} medium={8}
                        md={{
                            paddingRight: '2rem'
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
                        >
                            {nqabanqabaRooms.label}
                        </Typography>
                        <Typography
                            variant='h5'
                            sx={{
                                textTransform: 'uppercase',
                                color: projectColors.grey,
                            }}
                        >Self Catering</Typography>
                        <Box
                            sx={{
                                display: 'flex',
                                gap: "8px",
                                flexWrap: 'wrap'
                            }}
                            md={{
                                gap: '1rem'
                            }}
                        >
                            {icons.map((icon, idx) => (
                                <TextIcon
                                    key={"icon-" + idx}
                                    bg={projectColors.light}
                                    color={projectColors.tertiary}
                                    label={icon.label}
                                    width='120px'
                                    elem={<icon.elem
                                        sx={{
                                            color: projectColors.tertiary
                                        }} />}
                                />
                            ))}
                        </Box>

                        <Typography
                            sx={{
                                margin: '1rem 0',
                                color: projectColors.grey
                            }}
                        >
                            {nqabanqabaRooms.description}
                        </Typography>

                        <Typography
                            variant='h6'
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
                            variant='h6'
                            sx={{
                                textTransform: 'uppercase',
                                color: projectColors.primary,
                                fontFamily: projectFonts.primary,
                                fontSize: '16px',
                                marginTop: '1rem'
                            }}
                        >Main Amenities</Typography>



                        <Box
                            sx={{
                                display: 'flex',
                                gap: '1rem',
                                ['ul']: {
                                    padding: '1rem',
                                    flex: 1,
                                    margin: 0,
                                }
                            }}
                            md={{
                                ['ul']: {
                                    padding: '40px',
                                }
                            }}
                        >
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
                    <Grid item xs={12} medium={4}>
                        <Box
                            sx={{
                                // background: 'blue',
                                position: 'relative',
                                marginBottom: "2rem"
                            }}

                            md={{
                                position: "sticky",
                                top: '128px'
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



export const getStaticPaths = async () => {
    const paths = rooms.map((room) => ({
        params: { detail: slugify(room.label) }
    }));
    return { paths, fallback: false }
}


export const getStaticProps = async ({ params }: { params: { detail: string } }) => {
    const nqabanqabaRooms = rooms.filter(r => slugify(r.label) === params.detail)
    return {
        props: {
            nqabanqabaRooms: nqabanqabaRooms[0]
        }
    }
}

export default Detail;
