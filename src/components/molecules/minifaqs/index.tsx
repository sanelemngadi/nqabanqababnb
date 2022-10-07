import React from 'react';
import styled from "@emotion/styled";
import SectionHeading from "../../atoms/sections";
import FAQ from './FAQ';
import Box from "@mui/material/Box";

const Wrapper = styled(Box)`
    min-height: 288px;
    /* max-width: 764px; */
    /* background-color:  #F5F5F5; */
    /* margin: 2rem 0 0 0; */
`

const MiniFaqs = () => {
    return (
        <Wrapper
            sx={{
                margin: { xs: '2rem 0 0 0', md: '1rem' },
                marginBottom: { xs: '0px', md: '0px' },
                py: 2
            }}
        >
            <SectionHeading
                head='Frequently Asked Questions'
                subHead='Just in case you had the same questions that has previously been asked.'
                side
            />
            <FAQ />
        </Wrapper>
    )
}

export default MiniFaqs