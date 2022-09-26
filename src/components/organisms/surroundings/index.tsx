import React, { FC } from 'react';
import Box from "@mui/material/Box"
import Container from "@mui/material/Container"
import { projectColors } from '../../../styles/theme';

import WhatsAround from '../../molecules/whatsaround';

import { arounds } from "../../../../data";
import { TabPanel } from "../../../utils";
import SectionHeading from '../../atoms/sections';
import TabHeadings from '../../molecules/tabs';

const Surroundings: FC = () => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };
    return (
        <Box
            sx={{
                background: `linear-gradient(180deg, ${projectColors.bgsecondary} 65%, #fff 70%)`,
                paddingBottom: { xs: "0px", sm: "40px", md: "54px" },
                paddingTop: "8px"
            }}
        >
            <Box>
                <SectionHeading
                    head="Quality time is subject to the environment."
                    subHead='What’s away matters as much as what’s around. We have more than just white linen and breakfast.'
                />
            </Box>


            <Container maxWidth="lg">
                <Box sx={{ width: '100%' }}>
                    <TabHeadings
                        value={value}
                        handleChange={handleChange}
                        items={arounds.map(item => item.category)}
                    />
                    <Box
                        sx={{
                            backgroundColor: projectColors.primary,
                            marginTop: "1rem",
                            borderRadius: { xs: "8px", sm: "16px", md: "32px" },
                            padding: { xs: "0px", sm: "16px", md: "32px" },

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