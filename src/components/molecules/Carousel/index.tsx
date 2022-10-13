import Box from '@mmasco-atoms/Box';
import Container from '@mmasco-atoms/Container';
import Typography from '@mmasco-atoms/Typography';
import { rooms } from 'data';
import type { NextPage } from 'next';
import { createRef, useRef, useState } from 'react';
import PricingCard from 'src/components/organisms/PricingCard';
import { Center } from 'src/styled.globals';
import styled from 'styled-components';
import { CarouselItem, Indecator, Indecators } from './styles';

const items = [1, 2, 3, 4, 5];


const Carousel: NextPage = () => {
    const widthSpan = 102;
    const [currentIndex, setCurrentIndex] = useState(0);
    const [touchStartPosition, setTouchStartPosition] = useState(0);
    const [touchEndPosition, setTouchEndPosition] = useState(0);
    const [touched, setTouched] = useState(false);
    const [swiped, setSwiped] = useState(false);


    const [mouseStartPosition, setMouseStartPosition] = useState(0);
    const [mouseEndPosition, setMouseEndPosition] = useState(0);
    const [mouseClicked, setMouseClicked] = useState(false);
    const [mouseSwiped, setMouseSwiped] = useState(false);

    const scrollerRef = useRef<any>(null);
    const carouselItemRef = useRef<any>([]);
    carouselItemRef.current = items.map((_, idx) => carouselItemRef.current[idx] ?? createRef());


    ////////////////////////////////////////////Start Common Event Utilities ///////////////////////////////

    const handlePrevSlide = () => {
        let newPosition = currentIndex;
        if (newPosition > 0) {
            newPosition = newPosition - 1;
        }

        setCurrentIndex(newPosition);
        translateFullSlides(newPosition);
    }

    const handleNextSlide = () => {
        let newPosition = currentIndex;
        if (newPosition < items.length - 1) {
            newPosition = newPosition + 1;
        }

        setCurrentIndex(newPosition);
        translateFullSlides(newPosition);
    }

    const handleJumpToSlide = (index: number) => {
        setCurrentIndex(index);
        translateFullSlides(index);
    }

    const translatePartialSlide = (toTranslate: number) => {
        let currentPosition = -currentIndex * widthSpan;
        const totalTranslation = currentPosition + toTranslate;

        for (let i = 0; i < carouselItemRef.current.length; i++) {
            carouselItemRef.current[i].current.style.transform = `translateX(${totalTranslation}%)`;
        }
    }


    const translateFullSlides = (newPosition: number) => {
        let toTranslate = -widthSpan * newPosition;

        for (let i = 0; i < carouselItemRef.current.length; i++) {
            carouselItemRef.current[i].current.style.transform = `translateX(${toTranslate}%)`;
        }
    }



    ////////////////////////////////////////////Start Touch Events///////////////////////////////

    const handleTouchStart = (e: any) => {
        setTouchStartPosition(e.targetTouches[0].clientX);
        setTouchEndPosition(e.targetTouches[0].clientX);

        setTouched(true);
    }

    const handleTouchMove = (e: any) => {
        setTouchEndPosition(e.targetTouches[0].clientX);
        const translateDist = (touchEndPosition - touchStartPosition) / scrollerRef.current.offsetWidth * 100;


        translatePartialSlide(translateDist);
        if (touched) {
            setSwiped(true);
        }
    }

    const handleTouchEnd = (e: any) => {
        if (swiped) {
            if (touchStartPosition - touchEndPosition > 75) {
                handleNextSlide();
            }
            else if (touchStartPosition - touchEndPosition < -75) {
                handlePrevSlide();
            }
            else {
                handleJumpToSlide(currentIndex);
            }
        }
        setTouched(false);
        setSwiped(false);
    }


    ////////////////////////////////////////////Start Mouse Events///////////////////////////////

    const handleMouseDown = (e: any) => {
        e.preventDefault();
        setMouseStartPosition(e.clientX);
        setMouseEndPosition(e.clientX);

        setMouseClicked(true);
    }

    const handleMouseMove = (e: any) => {
        e.preventDefault();
        if (mouseClicked) {
            setMouseEndPosition(e.clientX);
            const translateDist = (mouseEndPosition - mouseStartPosition) / scrollerRef.current.offsetWidth * 100;


            translatePartialSlide(translateDist);
            setMouseSwiped(true);
        }
    }

    const handleMouseUp = (e: any) => {
        if (mouseSwiped) {
            if (mouseStartPosition - mouseEndPosition > 100) {
                handleNextSlide();
            }
            else if (mouseStartPosition - mouseEndPosition < -100) {
                handlePrevSlide();
            }
            else {
                handleJumpToSlide(currentIndex);
            }
        }
        setMouseClicked(false);
        setMouseSwiped(false);
    }



    return (
        <Box
            sx={{
                backgroundColor: "#F5F5F5",
                paddingTop: { xs: "24px", md: "256px" },
                paddingBottom: "64px",
            }}
        >
            <Container
                // maxWidth='md'
                sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: "column",
                    backgroundColor: "black"
                }}
            >
                <Box
                    sx={{
                        width: { xs: "90vw", md: "900px" },
                        height: { xs: "calc(90vw * 1.78)", md: "calc(900px * 0.5625)" },
                        border: "1px solid #202020",
                        position: "relative",
                        display: "flex",
                        verticalAlign: "middle",
                        alignItems: "center"
                    }}
                >
                    <Box role={"button"}
                        onClick={handlePrevSlide}
                        sx={{
                            fontSize: "64px",
                            position: "absolute",
                            left: "2vw",
                            userSelect: "none",
                            color: currentIndex === 0 ? "#d9d9d9" : "black",
                            cursor: currentIndex === 0 ? "not-allowed" : "pointer",
                            zIndex: 2,

                            ['&:hover']: {
                                color: "white"
                            }
                        }}
                    >&laquo;</Box>
                    <Box role={'contentinfo'}
                        ref={scrollerRef}
                        sx={{
                            height: "100%",
                            width: "100%",
                            border: "1px solid red",
                            zIndex: 1,
                            caretColor: "transparent",
                            touchAction: "none",
                        }}
                    >

                        <Box
                            sx={{
                                whiteSpace: "nowrap",
                                border: "1px solid black",
                                height: "100%",
                                flexBasis: "100%",
                                overflow: "hidden",
                                caretColor: "transparent",
                                touchAction: "none",
                            }}
                        >
                            {items.map((_, idx) => (
                                <CarouselItem
                                    key={"item-" + idx}
                                    onTouchStart={(e: any) => handleTouchStart(e)}
                                    onTouchMove={(e: any) => handleTouchMove(e)}
                                    onTouchEnd={(e: any) => handleTouchEnd(e)}
                                    onTouchCancel={(e: any) => handleTouchEnd(e)}

                                    onMouseDown={(e: any) => handleMouseDown(e)}
                                    onMouseMove={(e: any) => handleMouseMove(e)}
                                    onMouseUp={(e: any) => handleMouseUp(e)}
                                    onMouseLeave={(e: any) => handleMouseUp(e)}

                                    ref={carouselItemRef.current[idx]}
                                    sx={{
                                        cursor: touched || mouseClicked ? "grabbing" : "grab",
                                    }}
                                >
                                    <div>
                                        {rooms.length > 0 ? rooms.map((room, idx) => (

                                            <PricingCard {...room} key={"i" + idx} />
                                        )) : <Typography variant="h3">No Available Room At the moment</Typography>}
                                    </div>
                                </CarouselItem>
                            ))}
                        </Box>

                    </Box>
                    <Box role={'button'}
                        onClick={handleNextSlide}
                        sx={{
                            fontSize: "64px",
                            position: "absolute",
                            right: "2vw",
                            caretColor: "transparent",
                            userSelect: "none",
                            color: currentIndex === items.length - 1 ? "#d9d9d9" : "black",
                            cursor: currentIndex === items.length - 1 ? "not-allowed" : "pointer",
                            zIndex: 2,

                            ['&:hover']: {
                                color: "white"
                            }
                        }}>&raquo;</Box>
                </Box>
                <Indecators>
                    {items.map((_, index) => <Indecator
                        key={index}
                        onClick={() => handleJumpToSlide(index)}
                        idx={currentIndex === index}
                    ></Indecator>)}
                </Indecators>
            </Container>

        </Box>
    )
}

export default Carousel;
