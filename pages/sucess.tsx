import React from 'react';
import Box from "@mui/material/Box"
import Container from "@mui/material/Container";
import Alert from "@mui/material/Alert";
import { useRouter } from 'next/router';
import { projectColors } from '../src/styles/theme';

const Sucess = () => {
    const router = useRouter();
    return (
        <Box
            sx={{
                width: "100%",
                height: '100vh',
                background: `linear-gradient(135deg, ${projectColors.primary}, ${projectColors.tertiary})`
            }}
        >
            <Container maxWidth='sm'
                sx={{
                    width: "100%",
                    height: '100%',
                    display: "flex",
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
            >
                <Alert onClose={() => router.push('/')}>Thank you for dropping us a line, we will come back to you as soon as possible</Alert>
            </Container>
        </Box>
    )
}

export default Sucess