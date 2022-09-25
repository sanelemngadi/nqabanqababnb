import React, { FC } from 'react';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import FAQ from '../../atoms/faqs';

const FAQs: FC = () => {
    return (
        <Box>
            <Container>
                <FAQ />
            </Container>
        </Box>
    )
}

export default FAQs;