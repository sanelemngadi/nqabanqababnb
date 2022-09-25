import React, { FC } from 'react';
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import { projectColors } from '../../../styles/theme';

import Icon from '@mui/material/Icon';
import Typography from '@mui/material/Typography';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';

import { TabPanel } from "../../../utils";
import Testimonials from '../testimonials';
import TabHeadings from '../../molecules/tabs';

import { reviews } from '../../../../data/reviews';


const ReviewsTab: FC = () => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };
    return (
        <Box
            sx={{
                marginTop: { xs: "1rem", md: "2rem" },
                paddingBottom: "64px"
            }}
        >
            <Container
                maxWidth="lg"
            >
                <Box sx={{
                    width: '100%',
                    ['.css-1sm2odq-MuiButtonBase-root-MuiTab-root.Mui-selected']: {
                        background: projectColors.grayD9,
                        color: projectColors.tertiary,

                    },
                    ['.css-1sm2odq-MuiButtonBase-root-MuiTab-root']: {
                        borderRadius: "16px"
                    },
                    ['.css-8s2xe4-MuiTabs-indicator']: {
                        backgroundColor: "transparent"
                    }
                }}>
                    <TabHeadings
                        value={value}
                        handleChange={handleChange}
                        items={reviews.map(i => i.category)}
                    />
                    <Box
                        sx={{
                            backgroundColor: projectColors.tertiary,
                            backgroundImage: "url('/vectors/bgGrid.svg')",
                            marginTop: "1rem",
                            borderRadius: { xs: "8px", sm: "16px", md: "32px" },
                            padding: { xs: "0px", sm: "16px", md: "32px" },
                        }}
                    >
                        {reviews.map((item, idx) => (
                            <TabPanel key={"item-" + idx} value={value} index={idx}>
                                <Testimonials reviews={item.ratings} />
                            </TabPanel>
                        ))}
                    </Box>
                </Box>
            </Container>

            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "1rem",
                    margin: "1rem auto"
                }}
            >
                <Button variant="contained"
                    color="secondary"
                    sx={{
                        backgroundColor: projectColors.bgsecondary,
                        color: projectColors.primary,
                    }}
                >
                    <Typography variant="h6"
                        sx={{
                            fontSize: "14px",
                            lineHeight: "1.5"
                        }}
                    >View all reviews</Typography>
                    <Icon><ArrowOutwardIcon /></Icon>
                </Button>
            </Box>
        </Box>
    )
}

export default ReviewsTab