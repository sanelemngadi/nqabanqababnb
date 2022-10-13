import React, { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { projectColors, projectFonts } from '../../styles/theme';
import RoomRating from '../molecules/ratings';
import { slugify } from '../../utils';
import styled from 'styled-components';

import Box from '@mmasco-atoms/Box';
import Typography from '@mmasco-atoms/Typography';

import { HiArrowRight } from "react-icons/hi"

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
`
const PricingCard: FC<Props> = ({ image, label, description, max }) => {
    return (
        <Box
            sx={{
                margin: '1rem',
                display: { md: 'flex' }
            }}
        >
            <Photo
                sx={{
                    background: 'blue',
                    overflow: 'hidden',
                    width: { md: '427px' },
                    height: { md: '430px' },
                }}
            >
                <Image
                    alt={label}
                    width={427}
                    height={430}
                    src={image}
                    layout="responsive"
                />
            </Photo>
            <Box
                sx={{
                    backgroundColor: projectColors.dark,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    maxWidth: { md: '427px' }
                }}
            >
                <Box
                    sx={{
                        maxWidth: { md: "356px" },
                        margin: { md: '0 auto' },
                    }}
                >
                    <Typography variant="h6"
                        sx={{
                            color: projectColors.dark,
                            fontFamily: projectFonts.secondary,
                            fontWeight: "700",
                            fontSize: { xs: '24px', md: "36px" },
                            margiBottom: '1rem'
                        }}
                    >
                        {label}
                    </Typography>
                    <Box>
                        <RoomRating max={max} />
                    </Box>
                    <Typography variant="p"
                        sx={{
                            color: '#7E7A5F',
                            fontFamily: projectFonts.primary,
                            fontSize: '16px',
                            fontWeight: '500',
                            maxWidth: { md: '281px' }

                        }}
                    >
                        {description}
                    </Typography>

                    <Box
                        sx={{
                            marginTop: "1rem",
                            marginBottom: "1rem",
                        }}
                    >
                        <Link
                            href={`/room-detail/${slugify(label)}`}
                            prefetch={false}
                            passHref
                        >
                            <CardLink>Read more <HiArrowRight /></CardLink>
                        </Link>
                    </Box>
                </Box>
            </Box>
        </Box >
    )
}

export default PricingCard