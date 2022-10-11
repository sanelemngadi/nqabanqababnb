import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';

import Box from '@mmasco-atoms/Box';

const Wrapper = styled(Box)`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    @media (min-width: 600px) {
        flex-direction: row;
        padding: 1rem;
        max-width: 768px
    }
`

const Photo = styled(Box)`
    width: 100%;
    flex: 1;
`
const ImagesGallery = () => {
    return (
        <Wrapper>
            <Photo>
                <Image src='/images/room1.jpg' width={256} height={232} layout="responsive" alt="room1" />
            </Photo>
            <Photo>
                <Image src='/images/room2.jpg' width={256} height={232} layout="responsive" alt="room1" />
            </Photo>
            <Photo
                md={{ display: "block" }}
            >
                <Image src='/images/room3.jpg' width={256} height={232} layout="responsive" alt="room1" />
            </Photo>
        </Wrapper>
    )
}

export default ImagesGallery