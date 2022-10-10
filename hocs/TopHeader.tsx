import React from 'react';
import EmailBox from '../src/components/molecules/EmailBox';
import SocialIcons from '../src/components/molecules/SocialIcons';
import { projectColors } from '../src/styles/theme';
import Box from '../src/components/atoms/Box';
import Container from '../src/components/atoms/Container';
import Typography from '../src/components/atoms/Typography';


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
                    variant="p"

                    sx={{
                        color: "#D9D9D9",
                        width: "100%",
                        textAlign: "center",
                        fontSize: "13px"
                    }}

                    md={{ paddingLeft: '2rem', textAlign: 'left' }}
                >
                    Check in at 14h00 and check out at 9h00
                </Typography>
                <Box
                    sx={{
                        display: "none",
                        marginLeft: "auto",
                        width: "104px",
                    }}

                    md={{ display: 'block' }}
                >
                    <SocialIcons />
                </Box>
            </Container>
        </Box >
    )
}

export default TopHeader