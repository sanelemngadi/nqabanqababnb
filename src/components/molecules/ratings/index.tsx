import React, { FC } from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import { projectFonts } from '../../../styles/theme';

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
            <Typography component="legend"
                sx={{
                    opacity: "0.7",
                    fontSize: { xs: "18px", md: '24px' },
                    fontFamily: projectFonts.secondary,
                    color: '#757575',
                }}
            >{max}</Typography>
            <Rating name="read-only" size="small" value={value} readOnly />
        </Box>
    );
}

export default RoomRating;
