import React, { FC } from 'react';
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import { projectColors } from '../../../styles/theme';

import Tabs, { tabsClasses } from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Icon from '@mui/material/Icon';
import Typography from '@mui/material/Typography';
import WhatsAround from '../../molecules/whatsaround';

import { arounds } from "../../../../data";
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';

import { TabPanel, a11yProps } from "../../../utils";
import Testimonials from '../testimonials';


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
                <Box sx={{ width: '100%' }}>
                    <Container
                        maxWidth="md"
                        sx={{
                            borderBottom: 0, borderColor: 'divider',
                            flexGrow: 1,
                            maxWidth: { xs: 320, sm: 480, md: "80%" },
                        }}

                    >
                        <Tabs
                            value={value}
                            onChange={handleChange}
                            variant="scrollable"
                            scrollButtons
                            aria-label="basic tabs example"
                            sx={{
                                [`& .${tabsClasses.scrollButtons}`]: {
                                    '&.Mui-disabled': { opacity: 0.3 },
                                },
                            }}

                        >

                            <Tab label="Room" {...a11yProps(0)}
                            />
                            <Tab label="Breakfast" {...a11yProps(1)}
                            />
                            <Tab label="Clean" {...a11yProps(2)}
                            />
                            <Tab label="Pool" {...a11yProps(3)}
                            />
                            <Tab label="Tranquility" {...a11yProps(4)}
                            />
                        </Tabs>
                    </Container>
                    <Box
                        sx={{
                            backgroundColor: projectColors.tertiary,
                            backgroundImage: "url('/vectors/bgGrid.svg')",
                            marginTop: "1rem",
                            borderRadius: { xs: "8px", sm: "16px", md: "32px" },
                            padding: { xs: "0px", sm: "16px", md: "32px" }
                        }}
                    >
                        <TabPanel value={value} index={0}>
                            <Testimonials />
                        </TabPanel>
                        <TabPanel value={value} index={1}>
                            Hello 2
                        </TabPanel>
                        <TabPanel value={value} index={2}>
                            Hello 3
                        </TabPanel>
                        <TabPanel value={value} index={3}>
                            Hello 4
                        </TabPanel>
                        <TabPanel value={value} index={4}>
                            Hello 5
                        </TabPanel>
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