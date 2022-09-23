import React from 'react';
import Box from "@mui/material/Box";
import InnerTab from '../../organisms/innerTab';
import TabHeading from '../../atoms/sections/TabHeading';

const WhatsAround = () => {
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
            }}
        >
            <Box
                sx={{
                    flex: "1",
                    padding: { xs: "2px", sm: "4px", md: "16px" },
                    display: "flex",
                    alignItems: "center",
                }}
            >
                <TabHeading
                    head="Check all the Property sorroundings *"
                    subHead="All distances are measured in straight lines. Actual travel distances may vary."
                />
            </Box>
            <Box
                sx={{
                    flex: "1",
                    padding: { xs: "2px", sm: "4px", md: "16px" },
                }}>
                <InnerTab />
            </Box>
        </Box >
    )
}

export default WhatsAround