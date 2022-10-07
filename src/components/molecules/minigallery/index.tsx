import React from 'react';
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Image from 'next/image';

const Wrapper = styled(Box)(({ theme }) => ({
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',

    [theme.breakpoints.up('sm')]: {
        flexDirection: 'row',
        padding: '1rem',
        // paddingRight: "2rem"
        // maxWidth: '764px',
        maxWidth: '768px'
    }
}))

const Photo = styled(Box)(({ theme }) => ({
    width: '100%',
    // height: '232px',
    // border: '1px solid black',
    // background: '#000',
    // flex: 1,
    flex: 1,

    [theme.breakpoints.up('md')]: {
        // width: '244px',
        // minHeight: '232px',
    }
}))
const ImagesGallery = () => {
    return (
        <Wrapper>
            <Photo>
                <Image src='/images/room1.jpg' width={256} height={232} layout="responsive" alt="room1" />
            </Photo>
            <Photo>
                <Image src='/images/room2.jpg' width={256} height={232} layout="responsive" alt="room1" />
                {/* <div>ImagesGallery</div> */}
            </Photo>
            <Photo
                sx={{
                    display: { md: 'block', lg: 'block' }
                }}
            >
                <Image src='/images/room3.jpg' width={256} height={232} layout="responsive" alt="room1" />
                {/* <div>ImagesGallery</div> */}
            </Photo>
        </Wrapper>
    )
}

export default ImagesGallery