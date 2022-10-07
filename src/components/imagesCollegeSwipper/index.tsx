import React from "react";
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

import { Parallax, Pagination, Navigation } from "swiper";
import Image from "next/image";
import { projectColors } from "../../styles/theme";

const Wrapper = styled(Swiper)`
    color: #fff;
    .swiper-slide{
        font-size: 18px;
        box-sizing: border-box;
        padding: 24px;

        @media (min-width: 576px){
            padding: 24px 32px;
        }
        @media (min-width: 768px){
            padding: 40px 60px;
        }
    }

    .swiper {
        width: 100%;
        height: 100%;
        background: #000;
    }
    .parallax-bg {
        position: absolute;
        left: 0;
        top: 0;
        width: 130%;
        height: 100%;
        -webkit-background-size: cover;
        background-size: cover;
        background-position: center;
    }

    .swiper-pagination-bullet{
        background-color: ${projectColors.light};
    }
    .swiper-pagination{
        background-color: rgba(0,0,0,0.5);
    }

    .swiper-button-next,
    .swiper-button-prev{
        display: none;

        @media (min-width: 768px){
            display: flex;
            color: ${projectColors.light};
        }
    }
`
const Text = styled(Box)`
    font-size: 14px;
    max-width: 400px;
    line-height: 1.3;
    display: flex;
    width: 100%;
`

const CollegeSwiper = () => {
    return (
        <Wrapper
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
                            <Image
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
    );
}

export default CollegeSwiper;