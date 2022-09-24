import React, { FC } from 'react';
import Box from "@mui/material/Box"
import Container from "@mui/material/Container"
import { projectColors } from '../../../styles/theme';

import Tabs, { tabsClasses } from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import WhatsAround from '../../molecules/whatsaround';

import { arounds } from "../../../../data";
import { TabPanel, a11yProps } from "../../../utils";

const Surroundings: FC = () => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };
    return (
        <Box
            sx={{
                background: `linear-gradient(180deg, ${projectColors.bgsecondary} 65%, #fff 70%)`,
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

                            {arounds.map((item, idx) => (
                                <Tab key={"i-" + idx} label={item.category} {...a11yProps(idx)}
                                />
                            ))}
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
                        {arounds.map((item, idx) => (
                            <TabPanel key={"i-" + idx} value={value} index={idx}>
                                <WhatsAround
                                    head={item.details.head}
                                    subHead={item.details.description}
                                    details={item.details.innerCategories}
                                    type={item.details.type}
                                />
                            </TabPanel>
                        ))}
                    </Box>
                </Box>
            </Container>
        </Box>
    )
}

export default Surroundings