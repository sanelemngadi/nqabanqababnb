import { Box, Stack, Checkbox, Button } from '@mui/material';
import React from 'react';
import { projectColors, projectFonts } from '../../../styles/theme';
import Heading from '../../atoms/hero/Heading';
import { TextInput, TextShadow, Wrapper } from '../../../styles/hero';





const Hero = () => {
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
                <Box
                    sx={{
                        backgroundColor: { md: "white" },
                        padding: "4px",
                        borderRadius: { xs: "0px", md: "100px" },
                        overflow: "hidden"
                    }}
                >
                    <Stack direction="row"
                        component="form"
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-around",
                            flexDirection: { xs: "column", sm: "row" },
                            margin: "0.1rem auto"
                        }}
                    >
                        <Box
                            sx={{
                                width: "100%",
                                paddingX: "1rem",
                            }}
                        >
                            <TextInput
                                id="outlined-basic"
                                label="Nqabanqaba"
                                variant="standard"
                                sx={{
                                    marginBottom: { xs: "1rem", sm: "0" },
                                    width: "100%",
                                    height: { xs: "48px", md: "54px" },
                                    display: { xs: "none", md: "block" }
                                }}
                            />
                        </Box>
                        <Box
                            sx={{
                                width: "100%",
                                paddingX: "1rem",
                            }}
                        >
                            <TextInput
                                id="outlined-basic"
                                label="Checking"
                                variant="standard"
                                sx={{
                                    marginBottom: { xs: "1rem", sm: "0" },
                                    width: "100%",
                                    height: { xs: "48px", md: "54px" },
                                    display: { xs: "none", md: "block" }
                                }}
                            />
                        </Box>
                        <Box
                            sx={{
                                width: "100%",
                                paddingX: "1rem",
                            }}
                        >
                            <TextInput
                                id="outlined-basic"
                                label="Children"
                                variant="standard"
                                sx={{
                                    marginBottom: { xs: "1rem", sm: "0" },
                                    width: "100%",
                                    height: { xs: "48px", md: "54px" },
                                    display: { xs: "none", md: "block" }
                                }}
                            />
                        </Box>
                        <Box
                            sx={{
                                width: "100%",
                                paddingX: "1rem",
                            }}
                        >
                            <TextInput
                                id="outlined-basic"
                                label="adults"
                                variant="standard"
                                sx={{
                                    marginBottom: { xs: "1rem", sm: "0" },
                                    width: "100%",
                                    height: { xs: "48px", md: "54px" },
                                    display: { xs: "none", md: "block" }
                                }}
                            />
                        </Box>
                        <Box>
                            <Button variant="contained"
                                color="secondary"
                                sx={{
                                    display: "flex",
                                    alignItems: "cente",
                                    width: { xs: "100%", md: "203px" },
                                    height: { xs: "48px", md: "54px" },
                                    backgroundColor: projectColors.secondary,
                                    color: projectColors.primary,
                                    borderRadius: { xs: "8px", md: "100px" }
                                }}
                            >
                                Check Availability
                            </Button>
                        </Box>
                    </Stack>
                </Box>
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