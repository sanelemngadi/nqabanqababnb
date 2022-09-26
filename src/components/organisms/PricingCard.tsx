import React, { FC } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { projectColors, projectFonts } from '../../styles/theme';
import RoomRating from '../molecules/ratings';
import Link from 'next/link';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import styled from '@emotion/styled';

interface Props {
    image: string,
    label: string,
    description: string,
    max: string
}

const CardLink = styled.a`
    border: 1px solid rgba(0,0,0,0.05);
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-weight: 600;
    padding: 4px 16px;
    font-family: ${projectFonts.primary};
    color: ${projectColors.primary};

    &:hover{
        color: "blue"
    }
`
const PricingCard: FC<Props> = ({ image, label, description, max }) => {
    return (
        <Card sx={{
            width: { xs: "100%", sm: 345 },
        }} >
            <CardMedia
                component="img"
                height="216"
                image={image}
                alt={label}
            />
            <CardContent
                sx={{
                    backgroundColor: projectColors.light
                }}
            >
                <Typography gutterBottom variant="h6"
                    sx={{
                        color: projectColors.dark,
                        fontFamily: projectFonts.primary,
                        fontWeight: "700",
                        fontSize: "18px"
                    }}>
                    {label}
                </Typography>
                <Box>
                    <RoomRating max={max} />
                </Box>
                <Typography variant="body2" sx={{
                    color: projectColors.primary,
                    fontFamily: projectFonts.primary
                }}>
                    {description.slice(0, 100) + "..."}
                </Typography>

                <Box
                    sx={{
                        marginY: "1rem",
                        // width: "50%",
                    }}
                >
                    <Link href="#" passHref>
                        <CardLink>Read more <ArrowRightAltIcon /></CardLink>
                    </Link>
                </Box>
            </CardContent>
        </Card>
    )
}

export default PricingCard