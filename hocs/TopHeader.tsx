import React from 'react';
//material ui components
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import EmailBox from '../src/components/molecules/EmailBox';
import SocialIcons from '../src/components/molecules/SocialIcons';
import { projectColors } from '../src/styles/theme';


const TopHeader = () => {

    return (
        <Box
            sx={{
                backgroundColor: projectColors.dark,
            }}
        >
            <Container
                maxWidth="lg"
                sx={{
                    backgroundColor: projectColors.dark,
                    height: "48px",
                    display: "flex",
                    alignItems: "center",
                }}>
                <EmailBox />
                <Typography
                    variant="caption"
                    component="p"
                    fontSize="13px"

                    sx={{
                        color: "#D9D9D9",
                        paddingLeft: { md: "32px" },
                        width: "100%",
                        textAlign: { xs: "center", md: "left" }
                    }}
                >
                    Check in at 14h00 and check out at 9h00
                </Typography>
                <Box
                    sx={{
                        display: { xs: "none", md: "block" },
                        marginLeft: "auto",
                        width: "104px",
                    }}
                >
                    <SocialIcons />
                </Box>
            </Container>
        </Box >
    )
}

export default TopHeader