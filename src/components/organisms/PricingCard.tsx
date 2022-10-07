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

const Photo = styled(Box)`
    display: block;
    height: 100%;
    width: 100%;
    /* padding: 1rem; */
`
const PricingCard: FC<Props> = ({ image, label, description, max }) => {
    return (
        <Card sx={{
            // maxWidth: { xs: "100%", sm: 345 },
            // padding: "8px"
            display: { md: 'flex' },
            margin: { xs: '1rem', md: '0 1rem' },
        }} >
            <Photo
                sx={{
                    width: { md: '427px' },
                    height: { md: '430px' },
                    background: 'blue',
                    overflow: 'hidden'
                }}
            >
                <Image
                    alt={label}
                    width={427}
                    height={430}
                    // width={345}
                    // height={216}
                    src={image}
                    layout="responsive"
                />
            </Photo>
            <CardContent
                sx={{
                    backgroundColor: projectColors.light,
                    width: { md: '427px' },
                    // height: { md: '430px' },
                    display: 'flex',
                    // flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
            >
                <Box
                    sx={{
                        maxWidth: { md: "356px" },
                        margin: { md: '0 auto' },
                    }}
                >
                    <Typography gutterBottom variant="h6"
                        sx={{
                            color: projectColors.dark,
                            fontFamily: projectFonts.secondary,
                            fontWeight: "700",
                            fontSize: { xs: '24px', md: "36px" }
                        }}>
                        {label}
                    </Typography>
                    <Box>
                        <RoomRating max={max} />
                    </Box>
                    <Typography variant="body2" sx={{
                        color: '#7E7A5F',
                        fontFamily: projectFonts.primary,
                        fontSize: '16px',
                        fontWeight: '500',
                        maxWidth: { md: '281px' },
                        // margin: { md: '0 auto' }

                    }}>
                        {description}
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
                </Box>
            </CardContent>
        </Card>
    )
}

export default PricingCard