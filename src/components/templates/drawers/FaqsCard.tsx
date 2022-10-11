import React, { FC } from 'react';
import { projectColors, projectFonts } from '../../../styles/theme';

import Box from '@mmasco-atoms/Box';
import Typography from '@mmasco-atoms/Typography';
import Divider from '@mmasco-atoms/Divider';

interface Props {
    q: string,
    a: string,
    date: string
}

const FaqsCard: FC<Props> = ({ q, a, date }) => {
    return (
        <Box
            sx={{ maxWidth: "100%", margin: "1rem", backgroundColor: "#fff", color: "#000", border: '1px solid silver' }}
            md={{ maxWidth: "275px" }}
        >
            <Box
                sx={{ padding: "1rem" }}
            >
                <Typography sx={{ fontSize: "14px", marginBottom: "1rem", textAlign: 'right', color: "#000" }} >
                    <>Answered - {date}</>
                </Typography>
                <Typography sx={{
                    marginBottom: "1.5rem",
                    color: projectColors.dark,
                    fontFamily: projectFonts.primary,
                    fontWeight: "700",
                }}>
                    {q}
                </Typography>
                <Divider sx={{ borderColor: "silver", marginBottom: "1rem" }} />
                <Typography variant="p"
                    sx={{ color: "#000" }}
                >
                    {a}
                </Typography>
            </Box>
        </Box>
    );
}


export default FaqsCard;