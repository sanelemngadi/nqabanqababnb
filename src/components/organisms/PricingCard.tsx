import React, { FC } from 'react';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import Box from '@mui/material/Box';
// import Typography from '@mui/material/Typography';
import { projectColors, projectFonts } from '../../styles/theme';
import RoomRating from '../molecules/ratings';
import Link from 'next/link';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
// import styled from '@emotion/styled';
import { slugify } from '../../utils';
import Image from 'next/image';
import Box from '../atoms/Box';
import styled from 'styled-components';
import Typography from '../atoms/Typography';

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
        <Box
            sx={{
                margin: '1rem',
            }}
            md={{
                display: 'flex',
                margin: '1rem',
            }}
        >
            <Photo
                sx={{
                    background: 'blue',
                    overflow: 'hidden'
                }}
                md={{
                    width: '427px',
                    height: '430px',
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
                    backgroundColor: projectColors.light,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}

                md={{ width: '427px', }}
            >
                <Box
                    md={{
                        maxWidth: "356px",
                        margin: '0 auto',
                    }}
                >
                    <Typography variant="h6"
                        sx={{
                            color: projectColors.dark,
                            fontFamily: projectFonts.secondary,
                            fontWeight: "700",
                            fontSize: '24px',
                            margiBottom: '1rem'
                        }}
                        md={{ fontSize: "36px" }}
                    >
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

                    }}
                        md={{
                            maxWidth: '281px',
                        }}
                    >
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
            </Box>
        </Box>
    )
}

export default PricingCard