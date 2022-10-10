import React, { FC } from 'react';
import PricingCard from '../PricingCard';
import { rooms } from '../../../../data';
import { Swiper, SwiperSlide } from "swiper/react";
import SectionHeading from '../../atoms/sections';

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Pagination, Autoplay } from "swiper";
import { useScreenSize } from '../../../hooks';
import styled from 'styled-components';
import Box from '../../atoms/Box';
import Container from '../../atoms/Container';
import Typography from '../../atoms/Typography';


const SwipperWrapper = styled(Swiper)`
    .swiper-pagination{
        transform: translateY(.5rem);
    }
`


const Pricing: FC = () => {
    const sm = useScreenSize('sm');
    const md = useScreenSize('md');

    return (
        <Box
            sx={{
                minHeight: '100vh',
                background: '#efefef',
                overflow: 'hidden',
            }}
        >
            <Container
                maxWidth="md"
                sx={{
                    backgroundRepeat: "repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    paddingLeft: 0,
                    paddingRight: 0,
                }}
            >
                <SectionHeading
                    head="hello"
                    subHead="this is the heading one of my paragraph"
                />
                <SwipperWrapper
                    navigation={!md}
                    modules={[Autoplay, Pagination]}
                    className="mySwiper"
                    slidesPerView={1}
                    pagination={{
                        clickable: true,
                    }}
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                    }}
                >
                    {rooms.length > 0 ? rooms.map((room, idx) => (
                        <SwiperSlide key={"i" + idx}
                            style={{ paddingBottom: "32px" }}
                        >
                            <PricingCard {...room} />
                        </SwiperSlide>
                    )) : <Typography variant="h3">No Available Room At the moment</Typography>}
                </SwipperWrapper>
            </Container>
        </Box>
    )
}

export default Pricing