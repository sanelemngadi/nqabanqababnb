import React from 'react';
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";

//material ui components
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import EmailBox from '../src/components/molecules/EmailBox';
import SocialIcons from '../src/components/molecules/SocialIcons';


const TopHeader = () => {
    const theme = useTheme()
    const matches = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <Box
            sx={{
                backgroundColor: "black",
            }}
        >
            <Container
                maxWidth="lg"
                sx={{
                    backgroundColor: "black",
                    height: "40px",
                    display: "flex",
                    alignItems: "center"
                }}>
                <EmailBox small={matches} />
                <Typography
                    variant="h6"
                    component="p"
                    marginLeft={"32px"}
                    fontSize="13px"

                    sx={{
                        color: "white"
                    }}
                >
                    Check in at 14h00 and check out at 9h00
                </Typography>
                <Box
                    sx={{
                        marginLeft: "auto",
                        width: "104px",
                    }}
                >
                    <SocialIcons small={matches} />
                </Box>
            </Container>
        </Box>
    )
}

export default TopHeader