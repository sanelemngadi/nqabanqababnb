import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import styled from '@emotion/styled';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { rooms } from "../../../data";

// import "./styles.css";

// import required modules
import { Parallax, Pagination, Navigation } from "swiper";
import Image from "next/image";

const Images = styled(Image)`
    /* flex-grow: 1; */
`;

const Wrapper = styled(Swiper)`
    /* --swiper-navigation-color: "#fff";
    --swiper-pagination-color: "#fff"; */

    color: #fff;
    .swiper-slide{
        padding: 24px;
        @media (min-width: 576px){
            padding: 24px 32px;
        }
        @media (min-width: 768px){
            padding: 40px 60px;
        }
    }
`
const Text = styled(Box)`
    font-size: 14px;
    max-width: 400px;
    line-height: 1.3;
    display: flex;
    /* background-color: blue; */
    width: 100%;
`

export default function CollegeSwiper() {
    return (
        <>
            <Wrapper
                // sx={{
                //     padding: { xs: "1rem", md: "40px 60px" }
                // }}
                speed={600}
                parallax={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Parallax, Pagination, Navigation]}
                className="mySwiper"
            >
                <div
                    slot="container-start"
                    className="parallax-bg"
                    style={{
                        backgroundImage: "url(/images/backyard.jpg)",
                    }}
                    data-swiper-parallax="-23%"
                ></div>
                {rooms.map((room, num) => (
                    <SwiperSlide key={'room' + num}>

                        <Typography variant='h5' data-swiper-parallax="-300">
                            {room.label}
                        </Typography>
                        <Typography variant='caption' data-swiper-parallax="-200">
                            {room.max}
                        </Typography>
                        <Text
                            data-swiper-parallax="-100"
                            sx={{
                                flexDirection: { xs: "column", md: "column" }
                            }}

                        >
                            <Typography
                                variant="caption"
                                sx={{
                                    flexGrow: 1,
                                    fontSize: '16px',
                                    linHeight: "1"
                                }}
                            >
                                {room.description}
                            </Typography>
                            <Box
                                sx={{
                                    flexGrow: 1,
                                }}
                            >
                                <Images
                                    src={room.image}
                                    width={450}
                                    height={300}
                                    alt={room.label}
                                />
                            </Box>
                        </Text>
                    </SwiperSlide>
                ))}
            </Wrapper>
        </>
    );
}