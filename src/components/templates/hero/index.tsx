import { Box, Container, Stack, Checkbox, TextField, Button } from '@mui/material';
import React from 'react';
import { projectColors, projectFonts } from '../../../styles/theme';
import Heading from '../../atoms/hero/Heading';
import styled from "@emotion/styled";
import { TextShadow } from '../../../styles/hero';

const Wrapper = styled(Container)`
    min-height:calc(100vh - 80px - 40px);
    background-color: ${projectColors.primary};
    padding: 1rem;
    overflow-x: hidden;

    @media (max-width: 992px) {
        background-image: url('/images/park.jpg');
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;        
    }
`

const TextInput = styled(TextField)`
    background-color: ${projectColors.light};
    border-radius: 8px;
    border: 0;
    outline: 0;
    &::after{
        border-bottom: none;
    }

    &:hover, &:focus{
        border: 0 !important;
        outline: 0;
    }

    fieldset:hover, div:hover{
        border: 0;
        outline: 0;
    }
    fieldset{
        border: 0px solid red;
    }
    fieldset:hover{
        border: 0px solid yellow;
    }

`

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
                <Box>
                    <Stack direction="row"
                        component="form"
                        sx={{
                            // display: "flex",/
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
                <Box>
                    <Stack direction="row"
                        component="form"
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-around",
                            flexDirection: { xs: "column", sm: "row" },
                            margin: "2rem auto"
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
                                variant="outlined"
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
                                    borderRadius: "8px"
                                }}
                            >
                                Check Availability
                            </Button>
                        </Box>
                    </Stack>
                    <TextShadow
                        sx={{
                            textAlign: "center",
                            color: projectColors.bgsecondary,
                            fontSize: "14px",
                            fontFamily: projectFonts.primary,
                            display: { xs: "none", md: "block" }
                        }}
                    >Click the box above to enter your info to check availability.</TextShadow>
                </Box>
            </Wrapper>
        </Box>
    )
}

export default Hero