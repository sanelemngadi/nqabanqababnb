import React from 'react';
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Image from 'next/image';
import { projectFonts } from '../../../styles/theme';

const ChooseStay = () => {

    return (
        <Box
            sx={{
                margin: { xs: "64px auto", sm: "96px auto" }
            }}
        >
            <Container
                maxWidth="md"
                sx={{
                    display: 'flex',
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                    margin: "0rem auto",
                }}
            >
                <Box>
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
                </Box>

            </Container>
        </Box>
    )
}

export default ChooseStay