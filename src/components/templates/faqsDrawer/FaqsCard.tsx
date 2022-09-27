import React, { FC } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { projectColors, projectFonts } from '../../../styles/theme';

interface Props {
    q: string,
    a: string,
    date: string
}

const FaqsCard: FC<Props> = ({ q, a, date }) => {
    return (
        <Card sx={{ maxWidth: { xs: "100%", md: 275 }, m: 1 }}>
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    Answered - {date}
                </Typography>
                <Typography sx={{
                    mb: 1.5,
                    color: projectColors.dark,
                    fontFamily: projectFonts.primary,
                    fontWeight: "700",
                }}>
                    {q}
                </Typography>
                <Typography variant="body2">
                    {a}
                </Typography>
            </CardContent>
        </Card>
    );
}


export default FaqsCard;