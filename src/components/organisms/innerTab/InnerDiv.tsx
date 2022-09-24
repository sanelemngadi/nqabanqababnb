import React, { FC } from 'react';
import Image from 'next/image';

import Box from "@mui/material/Box";

import { ImageFeatures } from "../../../interfaces";

const InnerDiv: FC<{ props?: ImageFeatures }> = ({ props }) => {
    const { src, width, height } = props ? props : { src: "", width: 0, height: 0 };

    return (
        <Box>
            {props && <Image src={src} width={width} height={height} style={{ borderRadius: "16px" }} />}
        </Box>
    )
}

export default InnerDiv