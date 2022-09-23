import React, { FC } from 'react';
import Box from "@mui/material/Box"
import Container from "@mui/material/Container"

import Tabs, { tabsClasses } from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>{children}</Box>
            )}
        </div>
    );
}

function a11yProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const InnerTab: FC = () => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };
    return (
        <Box
            sx={{
                minHeight: "320px"
            }}
        >
            <Container
                sx={{
                    width: "100%",
                    padding: "0px",
                }}
            >
                <Box sx={{
                    width: "100%",
                    maxWidth: '500px',
                    minHeight: "320px",
                }}>
                    <Container
                        sx={{
                            borderBottom: 0, borderColor: 'divider',
                            flexGrow: 1,
                            backgroundColor: "rgba(217, 217, 217, 0.5)",
                            height: { xs: "40px", md: "48px" },
                            borderTopLeftRadius: { xs: "8px", sm: "16px", md: "32px" },
                            borderTopRightRadius: { xs: "8px", sm: "16px", md: "32px" },
                            padding: "0px"
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
                            <Tab label="What's nearby" {...a11yProps(0)}
                                sx={{
                                    fontSize: "12px",
                                }}
                            />
                            <Tab label="Nature beauty" {...a11yProps(1)}
                                sx={{
                                    fontSize: "12px",
                                }}
                            />
                            <Tab label="Closest airpots" {...a11yProps(2)}
                                sx={{
                                    fontSize: "12px",
                                }}
                            />
                            <Tab label="Resturents and cafes" {...a11yProps(3)}
                                sx={{
                                    fontSize: "12px",
                                }}
                            />
                        </Tabs>
                    </Container>
                    <Box
                        sx={{
                            backgroundColor: "#153852",
                            borderBottomLeftRadius: { xs: "8px", sm: "16px", md: "32px" },
                            borderBottomRightRadius: { xs: "8px", sm: "16px", md: "32px" },
                            padding: { xs: "0px", sm: "16px", md: "32px" },
                            minHeight: "calc(300px - 48px)",
                        }}
                    >
                        <TabPanel value={value} index={0}>
                            hello
                        </TabPanel>
                        <TabPanel value={value} index={1}>
                            hi
                        </TabPanel>
                        <TabPanel value={value} index={2}>
                            amenities
                        </TabPanel>
                        <TabPanel value={value} index={3}>
                            location
                        </TabPanel>
                        <TabPanel value={value} index={4}>
                            rules
                        </TabPanel>
                    </Box>
                </Box>
            </Container>
        </Box>
    )
}

export default InnerTab