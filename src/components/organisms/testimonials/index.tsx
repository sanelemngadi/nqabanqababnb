import React from 'react';
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import styled from "@emotion/styled";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Avatar from '@mui/material/Avatar';
import { deepOrange } from '@mui/material/colors';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation, Pagination } from "swiper";
import { projectColors, projectFonts } from '../../../styles/theme';
const slides = [
    1, 2, 3, 4, 5, 6, 7, 8, 9
]

const SwipperWrapper = styled(Swiper)`
    border-radius: 1rem;
    background-color: ${projectColors.tertiary};

    .swiper-button-next{
        border: 1px solid black;
        color: white;
    }
    .swiper-button-prev{
        border: 1px solid black;
        color: white;
    }
`

const Testimonials = () => {

    return (

        <Box
            sx={{
                paddingTop: ".5rem",
                paddingLeft: ".5rem",
                background: "linear-gradient(155deg, #000, #fff 50%)",
                borderRadius: "16px",
                maxWidth: "768px",
                margin: "0 auto"
            }}
        >
            <SwipperWrapper
                navigation={true}
                pagination={true}
                modules={[Navigation, Pagination]}
                className="mySwiper"
            >

                <SwiperSlide>
                    <Box
                        sx={{
                            height: "305px",
                            backgroundColor: projectColors.tertiary,
                            display: "flex",
                            maxWidth: "576px",
                            alignItems: "center",
                            justifyContent: "center",
                            margin: "0 auto",
                            flexDirection: { xs: "column", md: "row" },
                            padding: "2rem 1rem"
                        }}


                    >
                        <Box
                            sx={{
                                border: "1px solid red",
                                display: "flex",
                                alignItems: "start",
                                justifyContent: "center",
                            }}
                        >
                            <FormatQuoteIcon fontSize="large"
                                sx={{
                                    fontSize: "128px",
                                    color: "#D8D8D8"
                                }}
                            />
                        </Box>
                        <Box>
                            <Typography variant="h5" component="p"
                                sx={{
                                    fontSize: "20px",
                                    fontFamily: projectFonts.primary
                                }}
                            >
                                Everything🥺. The staff was friendly, it was sooo clean and beautiful. We had a very comfortable stay👌. The pictures don’t do justice for this place
                            </Typography>
                            <Box
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "flex-start",
                                    marginTop: "2rem"
                                }}
                            >
                                <Avatar sx={{
                                    bgcolor: deepOrange[500],
                                    marginRight: "1rem"
                                }}>N</Avatar>

                                <Typography variant="h5">
                                    Lihle
                                </Typography>
                            </Box>
                        </Box>

                    </Box>

                </SwiperSlide>
                {
                    slides.map((slide) => (
                        <SwiperSlide key={"i-" + slide}>
                            <Box
                                sx={{
                                    height: "305px",
                                    backgroundColor: projectColors.tertiary,
                                }}

                            >Slide {slide}</Box>

                        </SwiperSlide>
                    ))
                }
            </SwipperWrapper>
        </Box>
    )
}

export default Testimonials