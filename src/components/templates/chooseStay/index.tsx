import React from 'react';
import { Box, Container, Typography } from "@mui/material";
import Image from 'next/image';
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";
import { projectFonts } from '../../../styles/theme';

const ChooseStay = () => {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <Box>
            <Container
                maxWidth="md"
                sx={{
                    display: 'flex',
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                    margin: "2rem auto",
                    paddingTop: { xs: "32", sm: "64px", md: "96px", lg: "128px" }
                }}
            >
                <Box>
                    <Image src="/vectors/pillows.svg" alt="pillows" width={352} height={145} />
                </Box>
                <Box>
                    <Typography
                        variant={matches ? "h5" : "h3"}
                        sx={{
                            marginTop: { xs: "16px", md: "32px" },
                            marginBottom: { xs: "16px", md: "32px" },
                            fontFamily: projectFonts.secondary,
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