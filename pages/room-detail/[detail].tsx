import React, { FC } from 'react';

import { GoLocation } from "react-icons/go";
import { FaBed } from "react-icons/fa";
import { MdBathtub, MdFamilyRestroom, MdOutlineBedroomParent } from "react-icons/md";


import MetaData from '../../meta';
import { rooms } from '../../data';
import { slugify } from '../../src/utils';
import { projectColors, projectFonts } from '../../src/styles/theme';
// import RoomDetailSlide from '../../src/components/molecules/room-detail';
import CheckAvailabilityPricing from '../../src/components/templates/hero/book/CheckAvailibilityPricing';

import Box from '@mmasco-atoms/Box';
import Container from '@mmasco-atoms/Container';
import Grid from '@mmasco-atoms/Grid';
import TextIcon from '../../src/components/molecules/TextIcon';
import Typography from '@mmasco-atoms/Typography';
import Divider from '@mmasco-atoms/Divider';


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
        { label: "3 Guests", elem: MdFamilyRestroom },
        { label: "1 Bedroom", elem: MdOutlineBedroomParent },
        { label: "2 Beds", elem: FaBed },
        { label: "1 Bath", elem: MdBathtub },
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
                {/* <RoomDetailSlide /> */}
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
                        sx={{
                            paddingRight: { md: '2rem' }
                        }}
                    >
                        <TextIcon
                            bg={projectColors.light}
                            color={projectColors.tertiary}
                            label='64 Marlynhoek Meer-en-see'
                            fs='18px'
                            elem={<GoLocation color={projectColors.tertiary} size={24} />}
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
                                gap: { xs: "8px", md: "1rem" },
                                flexWrap: 'wrap'
                            }}
                        >
                            {icons.map((icon, idx) => (
                                <TextIcon
                                    key={"icon-" + idx}
                                    bg={projectColors.light}
                                    color={projectColors.tertiary}
                                    label={icon.label}
                                    elem={<icon.elem color={projectColors.tertiary} size={24} />}
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
                                    // padding: { xs: '1rem', md: "40px" },
                                    padding: "1rem",
                                    flex: 1,
                                    margin: 0,
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
                                position: { xs: 'relative', md: "sticky" },
                                marginBottom: "2rem",
                                top: { md: "128px" }
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
