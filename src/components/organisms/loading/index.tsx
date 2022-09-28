import React from 'react';
import Box from "@mui/material/Box"
import Container from "@mui/material/Container";
import CircularProgress from '@mui/material/CircularProgress';
import { projectColors } from '../../../styles/theme';

const Loading = () => {

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
                <CircularProgress color='secondary' />
            </Container>
        </Box>
    )
}

export default Loading