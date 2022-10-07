import React, { useState, useEffect } from 'react';
import Alert from "@mui/material/Alert";
import { useRouter } from 'next/router';
import { projectColors } from '../src/styles/theme';
import CircularProgress from '@mui/material/CircularProgress';
import styled from '@emotion/styled';

const Wrapper = styled.div`
    background: linear-gradient(135deg, ${projectColors.primary}, ${projectColors.tertiary});
    width: 100%;
    height: 100vh;
`

const Content = styled.div`
    width: 100%;
    height: 100%;
    max-width: 600px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;

`

const Sucess = () => {
    const router = useRouter();
    const [clicked, setClicked] = useState<boolean>(false);

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
        <Wrapper>
            <Content>
                {clicked ? <CircularProgress color='secondary' /> :
                    <Alert onClose={handleClose}>Thank you for dropping us a line, we will come back to you as soon as possible</Alert>}
            </Content>
        </Wrapper>
    )
}

export default Sucess