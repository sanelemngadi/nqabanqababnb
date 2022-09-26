import React, { FC } from 'react';
import Box from "@mui/material/Box";
import InnerTab from '../../organisms/innerTab';
import TabHeading from '../../atoms/sections/TabHeading';
import InnerDiv from '../../organisms/innerTab/InnerDiv';

import { ImageFeatures, SurroundingFeatures } from "../.././../interfaces"
import { projectColors } from '../../../styles/theme';

interface Props {
    head: string,
    subHead: string,
    type: string,
    details: SurroundingFeatures[] | ImageFeatures
}

const WhatsAround: FC<Props> = ({ head, subHead, type, details }) => {

    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                // background: "black",
                borderRadius: "1rem"
            }}
        >
            <Box
                sx={{
                    flex: 1,
                    padding: { xs: "2px", sm: "4px", md: "16px" },
                    display: "flex",
                    alignItems: "center",
                    // background: "red",
                }}
            >
                <TabHeading
                    head={head}
                    subHead={subHead}
                    color={projectColors.grayD9}
                />
            </Box>
            <Box
                sx={{
                    flex: 1,
                    padding: { xs: "2px", sm: "4px", md: "16px" },
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    overflow: "hidden",
                }}>
                {
                    type === "tab" ?
                        <InnerTab innerCats={details} />
                        :
                        <InnerDiv props={!Array.isArray(details) ? details : undefined} />
                }
            </Box>
        </Box >
    )
}

export default WhatsAround