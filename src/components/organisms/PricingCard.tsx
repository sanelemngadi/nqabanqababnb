import React, { FC } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { projectColors } from '../../styles/theme';

interface Props {
    image: string,
    label: string,
    description: string,
    max: string
}
const PricingCard: FC<Props> = ({ image, label, description, max }) => {
    return (
        <Card sx={{ maxWidth: 345, border: "1px solid rgba(0,0,0,0.12)" }} >
            <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
                <Typography variant="body1" component="div" color="secondary"
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        marginLeft: "1rem"
                    }}
                >
                    {max}
                </Typography>
            </CardActions>
            <CardMedia
                component="img"
                height="140"
                image={image}
                alt={label}
            />
            <CardContent
                sx={{
                    backgroundColor: projectColors.primary
                }}
            >
                <Typography gutterBottom variant="h6" component="div" color="secondary">
                    {label}
                </Typography>
                <Typography variant="body2" sx={{ color: projectColors.bgsecondary }}>
                    {description}
                </Typography>
            </CardContent>
        </Card>
    )
}

export default PricingCard