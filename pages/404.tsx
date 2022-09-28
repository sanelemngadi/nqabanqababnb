import React, { useState, useEffect } from 'react';
import Box from "@mui/material/Box"
import Container from "@mui/material/Container";
import Alert from "@mui/material/Alert";
import { useRouter } from 'next/router';
import { projectColors } from '../src/styles/theme';
import CircularProgress from '@mui/material/CircularProgress';

const Page404 = () => {
    const [clicked, setClicked] = useState<boolean>(false);
    const router = useRouter();

    const handleClose = () => {
        setClicked(true);
        router.push('/')
    }
    useEffect(() => {
        return () => {
            setClicked(false);
        }
    }, [])

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
                    justifyContent: 'center',
                    flexDirection: "column"
                }}
            >
                {clicked ? <CircularProgress color='secondary' /> :
                    <Alert
                        sx={{
                            my: 3
                        }}
                        severity="warning"
                        onClose={handleClose}>
                        Opps! &#128064; sorry we do not have that page
                    </Alert>
                }
            </Container>
        </Box>
    )
}

export default Page404