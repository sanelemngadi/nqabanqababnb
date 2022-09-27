import React, { FC } from 'react';
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

import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";

// import required modules
import { Navigation, Pagination } from "swiper";
import { projectColors, projectFonts } from '../../../styles/theme';
import { ReviewI } from '../../../interfaces';

const SwipperWrapper = styled(Swiper)`
    border-radius: 1rem;

    .swiper-button-next,.swiper-button-prev{
        color: ${projectColors.light};
    }
    .swiper-pagination-bullet{
        background: #fff;
    }

    .swiper-pagination{
        background-color: #000;
    }
`

const Testimonials: FC<{ reviews: ReviewI[] }> = ({ reviews }) => {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('sm'));


    return (

        <Box
            sx={{
                paddingTop: ".5rem",
                paddingLeft: ".5rem",
                background: { xs: projectColors.dark, md: `linear-gradient(155deg, rgba(0,0,0,0.2), ${projectColors.tertiary} 50%)` },
                borderRadius: "16px",
                maxWidth: "768px",
                margin: "0 auto",
                color: "#fff",
                ['.swiper-pagination-bullet-active']: {
                    backgroundColor: projectColors.light
                }
            }}
        >
            <SwipperWrapper
                navigation={!matches}
                // pagination={true}
                modules={[Pagination, Navigation]}
                pagination={{ clickable: true }}
                className="mySwiper"
            >
                {
                    reviews.map((review, idx) => (
                        <SwiperSlide key={"i" + idx}>
                            <Box
                                sx={{
                                    display: "flex",
                                    maxWidth: "576px",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    margin: "0 auto",
                                    flexDirection: { xs: "column", md: "row" },
                                    padding: "24px 8px"
                                }}


                            >
                                <Box
                                    sx={{
                                        display: "flex",
                                    }}
                                >
                                    <FormatQuoteIcon fontSize="large"
                                        sx={{
                                            fontSize: { xs: "54px", sm: "96px", md: "128px" },
                                            color: projectColors.grayD9,
                                            transform: "rotate(180deg)"
                                        }}
                                    />
                                </Box>
                                <Box>
                                    <Typography variant="h6" component="h4"
                                        sx={{
                                            fontSize: "24px",
                                            px: "0.5rem",
                                            textAlign: { xs: "center", md: "left" },
                                            lineHeight: "1.2",
                                            marginBottom: "16px",
                                            fontFamily: projectFonts.secondary,
                                            color: projectColors.light
                                        }}
                                    >
                                        {review.title}
                                    </Typography>
                                    <Typography variant="h2" component="p"
                                        sx={{
                                            fontSize: "20px",
                                            px: "0.5rem",
                                            textAlign: { xs: "center", md: "left" },
                                            color: projectColors.grayD9,
                                            fontFamily: projectFonts.primary
                                        }}
                                    >
                                        {review.good.length > 100 ? review.good.slice(0, 100) + "..." : review.good}
                                    </Typography>
                                    <Box
                                        sx={{
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: { xs: "center", md: "flex-start" },
                                            marginTop: { xs: "1rem", sm: "2rem" },
                                        }}
                                    >
                                        <Avatar sx={{
                                            bgcolor: deepOrange[500],
                                            marginRight: "1rem"
                                        }}>{review.author.charAt(0).toUpperCase()}</Avatar>

                                        <Typography variant="caption" component="p" fontSize="14px"
                                            sx={{
                                                fontFamily: projectFonts.primary
                                            }}
                                        >
                                            {review.author}
                                        </Typography>
                                    </Box>
                                    <br />
                                </Box>

                            </Box>

                        </SwiperSlide>
                    ))
                }
            </SwipperWrapper>
        </Box>
    )
}

export default Testimonials