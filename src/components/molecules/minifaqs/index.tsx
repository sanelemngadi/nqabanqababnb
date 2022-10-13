import React from 'react';
import styled from 'styled-components';
import FAQ from './FAQ';

import SectionHeading from "@mmasco-atoms/sections";
import Box from '@mmasco-atoms/Box';

const Mmasco = styled(Box)`
    min-height: 288px;
`

const MiniFaqs = () => {
    return (
        <Mmasco
            sx={{
                margin: { xs: '2rem 0 0 0', md: "1rem" },
                marginBottom: '0px',
                paddingTop: "1rem",
                paddingBottom: "1rem",
            }}
        >
            <SectionHeading
                head='Frequently Asked Questions'
                subHead='Before dropping us a line please read the frequently Asked Questions.'
            />
            <FAQ />
        </Mmasco>
    )
}

export default MiniFaqs