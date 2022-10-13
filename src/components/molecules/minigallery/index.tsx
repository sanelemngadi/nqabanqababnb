import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';

import Box from '@mmasco-atoms/Box';

const Mmasco = styled(Box)`
    /* width: 100%; */
    width: fit-content;
    /* display: flex;
    flex-direction: column; */
    /* gap: 1rem; */
    margin: 1rem auto;
    /* border: 1px solid black; */

    @media (min-width: 600px) {
        /* flex-direction: row; */
        /* padding: 1rem; */
        /* max-width: 768px; */
    }
`

const Photo = styled(Box)`
    /* width: 100%; */
    display: inline-block;
    width: 95vw;
    height: calc(95vw * 0.5625);
    /* flex: 1; */
    /* border: 1px solid black; */
    position: relative; 

    /* img{
        object-fit: cover !important;
    } */
  

    &:not(:last-of-type){
        margin-right: .5rem;
    }
    &:last-of-type{
        margin-right: 0;
    }
    
    @media (min-width: 600px) {        
        width: 30vw;
        max-width: 30vw;
        max-height: calc(30vw * 1.78);
        margin-right: 1rem;
    }

    @media (min-width: 900px) {        
        max-width: 256px;
        max-height: calc(256px * 1.78);
    }
`


const ImagesGallery = () => {
    return (
        <Mmasco>
            <Photo>
                <Image src='/images/room1.jpg' width={256} height={232} layout="fill" objectFit='cover' alt="room1" />
            </Photo>
            <Photo>
                <Image src='/images/room2.jpg' width={256} height={232} layout="fill" objectFit='cover' alt="room1" />
            </Photo>
            <Photo>
                <Image src='/images/room3.jpg' width={256} height={232} layout="fill" objectFit='cover' alt="room1" />
            </Photo>
        </Mmasco>
    )
}

export default ImagesGallery