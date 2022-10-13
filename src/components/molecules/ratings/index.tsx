import React, { FC } from 'react';
import { projectFonts } from '../../../styles/theme';

import Box from '@mmasco-atoms/Box';
import Typography from '@mmasco-atoms/Typography';

const RoomRating: FC<{ max: string }> = ({ max }) => {
    const [value, setValue] = React.useState<number | null>(2);

    return (
        <Box
            sx={{
                my: 1,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between"
            }}
        >
            <Typography
                variant='h4'
                sx={{
                    opacity: "0.7",
                    fontSize: { xs: "18px", md: "24px" },
                    fontFamily: projectFonts.secondary,
                    color: '#757575',
                }}
            >{max}</Typography>
            <Box>Rating Box</Box>
        </Box>
    );
}

export default RoomRating;
