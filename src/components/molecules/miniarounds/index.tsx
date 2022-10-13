import React from 'react';
import styled from 'styled-components';
import { projectFonts } from '../../../styles/theme';

import Box from '@mmasco-atoms/Box';

const Mmasco = styled(Box)`
    padding: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;

    ul{
        margin: 0;
        padding-left: 1rem;
    }
    h4:first-of-type{
        margin-top: 0;
    }
    h4{
        font-family: ${projectFonts.secondary};
        font-weight: 700;
        font-size: 20px;
        color: #000;
        margin-bottom: .5rem;
    }
    li{
        font-family: ${projectFonts.primary};
        font-weight: 400;
        color: #6A6A6A;
    }
`

const MiniAround = () => {
    return (
        <Mmasco
            sx={{
                width: '100%',
                margin: { xs: '1rem auto', md: 0 },
                border: '1px solid black',
                padding: '1rem',
                maxWidth: { sm: '100%', md: "392px" },
                minWidth: { md: "392px" },
                boxShadow: { md: '1px 2px 2px 0px rgba(0 0 0 / 15%)' }

            }}
        >
            <Box>
                <h4>The Nqabanqaba guesthouse offers the followin facilities and Amenities out of the box:</h4>
                <ul>
                    <li>Free Parking</li>
                    <li>Room service and Wifi access</li>
                    <li>Air conditioned rooms with hot showers</li>
                    <li>High level of cleanliness.</li>
                    <li>DSTV</li>
                    <li>Direct access to pool and outdoor sitting area</li>
                </ul>
                <h4>It&apos;s important to know what&apos;s around.</h4>
                <ul>
                    <li>We are Within 5mins drive to  Alkantstrand Beach</li>
                    <li>10 minutes drive to The Bay Hospital Netcare</li>
                    <li>4.2km away from Richards Bay Airport</li>
                    <li>Within a walkable distance to Meerensee Mall</li>
                </ul>
            </Box>
        </Mmasco>
    )
}

export default MiniAround