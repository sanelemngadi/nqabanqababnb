import React, { FC } from 'react';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import FAQ from '../../atoms/faqs';
import SectionHeading from '../../atoms/sections';

const FAQs: FC = () => {
    return (
        <Box>
            <Container
                sx={{
                    px: { xs: 0, md: 2 }
                }}
            >
                <SectionHeading
                    head='Frequently Asked Questions'
                    subHead='Just in case you had the same questions that has previously been asked.'
                    side />
                <FAQ />
            </Container>
        </Box>
    )
}

export default FAQs;