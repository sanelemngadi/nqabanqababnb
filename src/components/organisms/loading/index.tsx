import React, { FC, useEffect, useState } from 'react';
import Box from '../../atoms/Box';
import Container from '../../atoms/Container';

const Loading: FC = () => {
    const [count, setCount] = useState(0);
    const dots = [
        '.', '.', '.'
    ]


    useEffect(() => {
        // if () {
        document.body.style.height = '100vh';
        document.body.style.overflow = 'hidden';

        return () => {
            document.body.style.height = 'unset';
            document.body.style.overflow = 'unset';
        }

    }, []);
    useEffect(() => {
        const timer = setInterval(() => {
            if (count < 3) {
                setCount(prev => prev + 1);
            } else {
                setCount(0);
            }
        }, 500);

        return () => clearInterval(timer);
    }, [count])

    return (
        <Box
            sx={{
                width: "100%",
                height: '100vh',
                backgroundColor: "rgba(0 0 0 / 95%)",
                position: "fixed",
                top: "0",
                left: "0",
                zIndex: "3000",
            }}
        >
            <Container
                maxWidth='sm'
                sx={{
                    width: "100%",
                    height: '100%',
                    display: "flex",
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: "row",
                    fontSize: "48px",
                    color: "#fff",
                    ['div']: {
                        width: "32px"
                    }
                }}
            >
                {/* <CircularProgress color='secondary' /> */}
                Loading<div>
                    {dots.slice(0, count).map((dot, idx) => (
                        <span key={"dot-" + idx}>{dot}</span>
                    ))}
                </div>
            </Container>
        </Box>
    )
}

export default Loading