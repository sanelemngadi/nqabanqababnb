import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


// import required modules
import { Pagination, Navigation } from "swiper";
import { projectColors } from "../../../styles/theme";
import Image from "next/image";
import styled from "styled-components";

const Wrapper = styled(Swiper)`
    .swiper {
        width: 100%;
        height: 100%;
    }
    
    .swiper-slide {
        height: 128px;
        @media (min-width: 576px){
            height: 134px;
        }
        @media (min-width: 768px){
            height: 160px;
        }
        @media (min-width: 576px){
            height: 256px;
        }
      text-align: center;
      font-size: 18px;
      background: #000;

      /* Center slide text vertically */
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .swiper-slide img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .swiper-slide {
      width: 80%;
    }

    .swiper-slide:nth-of-type(2) {
      width: 60%;
    }

    .swiper-slide:nth-of-type(3) {
      width: 40%;
    }

    .swiper-button-prev,
    .swiper-button-next{
        color: ${projectColors.light};
    }
`

const RoomDetailSlide = () => {
    // console.count("room detail rendered: ");

    return (
        <Wrapper
            slidesPerView={3}
            spaceBetween={0}
            loop={true}
            pagination={{
                clickable: true,
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper"
        >
            <SwiperSlide>
                <Image src={'/images/room1.jpg'} width={449} height={256} alt='room' />
            </SwiperSlide>
            <SwiperSlide>
                <Image src={'/images/room2.jpg'} width={449} height={256} alt='room' />
            </SwiperSlide>
            <SwiperSlide>
                <Image src={'/images/room3.jpg'} width={449} height={256} alt='room' />
            </SwiperSlide>
            <SwiperSlide>
                <Image src={'/images/room4.jpg'} width={449} height={256} alt='room' />
            </SwiperSlide>
            <SwiperSlide>
                <Image src={'/images/backyard.jpg'} width={449} height={256} alt='room' />
            </SwiperSlide>
            <SwiperSlide>
                <Image src={'/images/park.jpg'} width={449} height={256} alt='room' />
            </SwiperSlide>
            <SwiperSlide>
                <Image src={'/images/im300.jpg'} width={449} height={256} alt='room' />
            </SwiperSlide>
        </Wrapper>
    );
}


export default RoomDetailSlide;