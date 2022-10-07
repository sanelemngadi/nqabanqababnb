import React, { FC } from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { projectColors } from '../../../styles/theme';
import PricingCard from '../PricingCard';
import { rooms } from '../../../../data';
import styled from '@emotion/styled';
import { Swiper, SwiperSlide } from "swiper/react";
import SectionHeading from '../../atoms/sections';

// Import Swiper styles
import "swiper/css";
// import "swiper/css/navigation";
import "swiper/css/pagination";

import { Pagination, Autoplay } from "swiper";
import { useScreenSize } from '../../../hooks';


const SwipperWrapper = styled(Swiper)`

    /* .swiper-button-next,.swiper-button-prev{
        color: ${projectColors.light};
        display: none;
    } */

    .swiper-pagination{
        transform: translateY(.5rem);
    }
`


const Pricing: FC = () => {
    const sm = useScreenSize('sm');
    const md = useScreenSize('md');

    const handlePageSize = (): number => {
        if (sm) return 1;
        if (md) return 2;
        return 3;
    }
    return (
        <Box
            sx={{
                // background: `linear-gradient(180deg, #fff 25%, ${projectColors.bgsecondary})`,
                // paddingBottom: { xs: "32px", sm: "64px", md: "96px" },
                minHeight: '100vh',
                background: '#efefef',
                overflow: 'hidden',
            }}
        >
            <Container
                maxWidth="md"
                sx={{
                    // padding: "0px 0.35rem",
                    // backgroundImage: "url(/vectors/bgGrid.svg)",
                    backgroundRepeat: "repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    paddingLeft: { sm: 0 },
                    paddingRight: { sm: 0 },
                    // padding: '1rem'
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
                    // spaceBetween={}
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