import React from 'react';
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Image from 'next/image';
import { projectFonts } from '../../../styles/theme';
import HomeABout from '../../molecules/about';
import ImagesGallery from '../../molecules/minigallery';
import MiniFaqs from '../../molecules/minifaqs';
import MiniAround from '../../molecules/miniarounds';

const ChooseStay = () => {

    return (
        <Box
            sx={{
                margin: { xs: "2rem auto", sm: "96px auto" }
            }}
        >
            <Container
                maxWidth="lg"
                className="yebo"
                sx={{
                    display: 'flex',
                    justifyContent: "flex-start",
                    alignItems: "start",
                    flexDirection: { xs: 'column', md: 'row' },
                    margin: "0rem auto",
                    paddingLeft: { sm: '0px' },
                    paddingRight: { sm: '0px' },
                    py: 1,
                    px: { md: 1 }
                }}
            >
                {/* <Box>
                    <Image src="/vectors/pillows.svg" alt="pillows" width={352} height={145} />
                </Box>
                <Box>
                    <Typography
                        variant={"h3"}
                        sx={{
                            marginTop: { xs: "16px", md: "32px" },
                            marginBottom: { xs: "16px", md: "32px" },
                            fontFamily: projectFonts.secondary,
                            fontSize: { xs: '24px', md: '40px' }
                        }}
                    >Choose your stay</Typography>
                </Box>
                <Box>
                    <Image src="/vectors/bed.svg" alt="the bed" width={384} height={95} />
                </Box> */}

                <Box
                    sx={{
                        flex: { md: 3 },
                    }}
                >
                    <HomeABout />
                    <ImagesGallery />
                    <MiniFaqs />
                </Box>
                <Box
                    sx={{
                        flex: { md: 1 },
                        position: 'sticky',
                        top: '96px'
                    }}
                >
                    <MiniAround />
                </Box>
            </Container>
        </Box>
    )
}

export default ChooseStay