import React, { FC } from 'react';
import Container from "@mui/material/Container"

import Tabs, { tabsClasses } from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { a11yProps } from "../../../utils";

interface Props {
    value: number,
    handleChange(event: React.SyntheticEvent, newValue: number): void,
    items: string[]
}
const TabHeadings: FC<Props> = ({ value, handleChange, items }) => {
    return (
        <Container
            maxWidth="md"
            sx={{
                borderBottom: 0, borderColor: 'divider',
                flexGrow: 1,
                maxWidth: { xs: "100%", sm: "95%", md: "80%" },
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
                        '&.Mui-disabled': {
                            opacity: 0.3
                        },
                    },
                    display: "flex",
                    flexDiection: "column",
                    ['& .css-heg063-MuiTabs-flexContainer']: {
                        justifyContent: { md: "center" },
                    }
                }}

            >

                {items.map((item, idx) => (
                    <Tab key={"i-" + idx} label={item} {...a11yProps(idx)}
                    />
                ))}
            </Tabs>
        </Container>
    )
}

export default TabHeadings