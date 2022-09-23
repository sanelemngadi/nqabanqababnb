import React, { FC } from 'react';
import Box from "@mui/material/Box"
import Container from "@mui/material/Container"
import { projectColors } from '../../../styles/theme';

import Tabs, { tabsClasses } from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import WhatsAround from '../../molecules/whatsaround';
import OverVeiws from '../../molecules/overviews';
import Amenities from '../../molecules/amenities';
import Location from '../../molecules/location';
import HouseRules from '../../molecules/houserules';

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

const Surroundings: FC = () => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };
    return (
        <Box
            sx={{
                backgroundColor: projectColors.bgsecondary,
                marginTop: { xs: "-6rem", md: "-2rem" },
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
                            <Tab label="What's around?" {...a11yProps(0)}
                            />
                            <Tab label="Overview" {...a11yProps(1)} />
                            <Tab label="Facilities/ammenities" {...a11yProps(2)} />
                            <Tab label="Location" {...a11yProps(3)} />
                            <Tab label="Policies and house rules" {...a11yProps(4)} />
                        </Tabs>
                    </Container>
                    <Box
                        sx={{
                            backgroundColor: projectColors.primary,
                            marginTop: "1rem",
                            borderRadius: { xs: "8px", sm: "16px", md: "32px" },
                            padding: { xs: "0px", sm: "16px", md: "32px" }
                        }}
                    >
                        <TabPanel value={value} index={0}>
                            <WhatsAround />
                        </TabPanel>
                        <TabPanel value={value} index={1}>
                            <OverVeiws />
                        </TabPanel>
                        <TabPanel value={value} index={2}>
                            <Amenities />
                        </TabPanel>
                        <TabPanel value={value} index={3}>
                            <Location />
                        </TabPanel>
                        <TabPanel value={value} index={4}>
                            <HouseRules />
                        </TabPanel>
                    </Box>
                </Box>
            </Container>
        </Box>
    )
}

export default Surroundings