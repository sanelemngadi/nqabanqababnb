import React from 'react';
import styled from 'styled-components';
import FAQ from './FAQ';

import SectionHeading from "@mmasco-atoms/sections";
import Box from '@mmasco-atoms/Box';

const Wrapper = styled(Box)`
    min-height: 288px;
`

const MiniFaqs = () => {
    return (
        <Wrapper
            sx={{
                margin: '2rem 0 0 0',
                marginBottom: '0px',
                paddingTop: "1rem",
                paddingBottom: "1rem",
            }}
            md={{ margin: "1rem" }}
        >
            <SectionHeading
                head='Frequently Asked Questions'
                subHead='Before dropping us a line please read the frequently Asked Questions.'
            />
            <FAQ />
        </Wrapper>
    )
}

export default MiniFaqs