import React, { FC } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { projectColors, projectFonts } from '../../styles/theme';
import RoomRating from '../molecules/ratings';
import Link from 'next/link';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import styled from '@emotion/styled';
import { slugify } from '../../utils';
import Image from 'next/image';

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
    color: ${projectColors.tertiary};

    &:hover{
        color: "blue"
    }
`
const PricingCard: FC<Props> = ({ image, label, description, max }) => {
    return (
        <Card sx={{
            maxWidth: { xs: "100%", sm: 345 },
            padding: "8px"
        }} >
            <Image
                alt={label}
                width={345}
                src={image}
                height={216}
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
                    }}
                >
                    <Link
                        href={`/room-detail/${slugify(label)}`}
                        prefetch={false}
                        passHref
                    >
                        <CardLink>Read more <ArrowRightAltIcon /></CardLink>
                    </Link>
                </Box>
            </CardContent>
        </Card>
    )
}

export default PricingCard