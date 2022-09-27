import React from 'react';
import Box from "@mui/material/Box"
import Container from "@mui/material/Container";
import Alert from "@mui/material/Alert";
import { useRouter } from 'next/router';
import { projectColors } from '../src/styles/theme';

const Page404 = () => {
    const router = useRouter();
    return (
        <Box
            sx={{
                width: "100%",
                height: '100vh',
                background: `linear-gradient(135deg, ${projectColors.primary}, ${projectColors.tertiary})`,
                position: "fixed",
                top: "0",
                left: "0",
                zIndex: "3000"
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
                <Alert severity="warning" onClose={() => router.push('/')}>
                    Opps! &#128064; sorry we have that page
                </Alert>
            </Container>
        </Box>
    )
}

export default Page404