import React from 'react';
import styled from "@emotion/styled";
import Box from "@mui/material/Box"
import { projectFonts } from '../../../styles/theme';

const Wrapper = styled(Box)`
    /* width: 392px;
    height: 544px; */
    /* border: 1px solid black; */
    background-color:  #EFEFEF;
    padding: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    /* max-width: 700px; */

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
        color: #6A6A6A;
        margin-bottom: .5rem;
    }
    li{
        font-family: ${projectFonts.primary};
        font-weight: 500;
        color: #6A6A6A;
    }
`

const MiniAround = () => {
    return (
        <Wrapper
            sx={{
                width: { xs: '100%' },
                // width: { xs: '100%', md: '392px' },
                // minHeight: { xs: '544px', md: '544px' }
                boxShadow: { md: '2px 4px 4px 0px rgba(0 0 0 / 25%)' },
                margin: { xs: '1rem auto', md: 0 },
                maxWidth: { sm: '100%', md: '392px' },
                minWidth: { md: '392px' }
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
        </Wrapper>
    )
}

export default MiniAround