import React, { FC } from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Checkbox from '@mui/material/Checkbox';
import Paper from '@mui/material/Paper';
import { projectColors, projectFonts } from '../../../styles/theme';
import Heading from '../../atoms/hero/Heading';
import { TextShadow, Wrapper } from '../../../styles/hero';
import CheckAvailability from './book/CheckAvailability';





const Hero: FC = () => {

    return (
        <Box
            sx={{
                backgroundColor: projectColors.primary
            }}
        >
            <Wrapper maxWidth="md">
                <Heading />
                <TextShadow
                    variant="h4"
                    sx={{
                        color: projectColors.light,
                        maxWidth: "567px",
                        textAlign: "center",
                        margin: "0 auto",
                        fontFamily: projectFonts.primary,
                        fontSize: "24px",
                        marginTop: "24px",
                    }}
                >
                    Best BnB in Richards Bay that offers more than comfort and quility sleep.
                </TextShadow>
                <Box
                    sx={{
                        marginTop: "32px"
                    }}
                >
                    <Stack direction="row"
                        component="form"
                        sx={{
                            alignItems: "center",
                            justifyContent: "space-around",
                            flexDirection: { xs: "column", sm: "row" },
                            maxWidth: "256px",
                            margin: "2rem auto",
                            display: { xs: "none", md: "flex" }
                        }}
                    >
                        <Box>
                            <Checkbox name="travel"
                                sx={{
                                    backgroundColor: "rgba(255, 255, 255, 0.25)",
                                    marginBottom: { xs: "1rem", sm: "0" }
                                }}
                            />
                        </Box>
                        <Box>
                            <TextShadow
                                variant="h6"
                                fontSize="16px"
                                sx={{
                                    backgroundColor: "transparent",
                                    color: "#7B88FF"
                                }}
                            >I am Travelling for work</TextShadow>
                        </Box>
                    </Stack>
                </Box>
                <Paper
                    elevation={3}
                    sx={{
                        backgroundColor: { xs: "white" },
                        padding: "4px",
                        borderRadius: { xs: "1rem", md: "100px" },
                        overflow: "hidden",
                        p: { xs: 3, md: 2 },
                    }}
                >
                    <CheckAvailability />
                </Paper>
                <TextShadow
                    sx={{
                        textAlign: "center",
                        color: projectColors.bgsecondary,
                        fontSize: "14px",
                        fontFamily: projectFonts.primary,
                        display: { xs: "none", md: "block" },
                        marginTop: "16px"
                    }}
                >Click the box above to enter your info to check availability.</TextShadow>
            </Wrapper>
        </Box>
    )
}

export default Hero