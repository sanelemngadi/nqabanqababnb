import React, { FC } from 'react';
import Box from "@mui/material/Box"
import Container from "@mui/material/Container"

import Tabs, { tabsClasses } from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';

import { SurroundingFeatures, ImageFeatures } from "../../../interfaces";

import { TabPanel, a11yProps } from "../../../utils";
import { projectColors } from '../../../styles/theme';

const InnerTab: FC<{ innerCats: SurroundingFeatures[] | ImageFeatures }> = ({ innerCats }) => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <Box
            sx={{
                width: "100%",
                maxWidth: "100%"
            }}
        >
            <Container
                sx={{
                    width: "100%",
                    padding: "0px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    p: { xs: 1, md: 0 }
                }}
            >
                <Box sx={{
                    width: "100%",
                }}>
                    <Container
                        sx={{
                            borderBottom: 0, borderColor: 'divider',
                            flexGrow: 1,
                            backgroundColor: "rgba(217, 217, 217, 0.5)",
                            height: { xs: "40px", md: "48px" },
                            borderTopLeftRadius: { xs: "8px", sm: "16px", md: "32px" },
                            borderTopRightRadius: { xs: "8px", sm: "16px", md: "32px" },
                            padding: "0px",
                            ['.css-8s2xe4-MuiTabs-indicator']: {
                                backgroundColor: projectColors.light
                            }
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
                            {Array.isArray(innerCats) && innerCats.map((item, idx) => {
                                return (
                                    <Tab key={"i2-" + idx} label={item.name} {...a11yProps(idx)}
                                        sx={{
                                            fontSize: "12px",
                                            color: projectColors.secondary
                                        }}
                                    />
                                )
                            })}
                        </Tabs>
                    </Container>
                    <Box
                        sx={{
                            backgroundColor: "#225566",
                            // backgroundColor: "#153852",
                            borderBottomLeftRadius: { xs: "8px", sm: "16px", md: "32px" },
                            borderBottomRightRadius: { xs: "8px", sm: "16px", md: "32px" },
                            padding: { xs: "1rem", md: "32px" }
                        }}
                    >

                        {Array.isArray(innerCats) && innerCats.map((item, idx) => (
                            // there is a possibility that innercats is an array and an object and I want to only thruegh items only if its an array
                            <TabPanel key={"i3-" + idx} value={value} index={idx}>
                                <Box>


                                    <Table size="small" aria-label="a dense table">
                                        <TableBody>
                                            {item.features.map((feat, index) => (
                                                <TableRow
                                                    key={"index-" + index}
                                                    sx={{
                                                        '&:last-child td, &:last-child th': { border: 0 },
                                                        color: "white"
                                                    }}
                                                >
                                                    <TableCell sx={{ color: "#adadad", fontSize: { xs: "12px", md: "12px" } }}>
                                                        {feat.item}
                                                    </TableCell>
                                                    <TableCell sx={{
                                                        color: "#adadad",
                                                        fontSize: { xs: "12px", md: "12px" }
                                                    }}
                                                        align="right">{feat.distance}</TableCell>
                                                </TableRow>
                                            ))}

                                        </TableBody>
                                    </Table>
                                </Box>
                            </TabPanel>
                        ))}
                    </Box>
                </Box>
            </Container>
        </Box >
    )
}

export default InnerTab