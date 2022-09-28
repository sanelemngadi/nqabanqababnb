import React, { FC, useEffect } from "react";
import Box from "@mui/material/Box";
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Alert from '@mui/material/Alert';
import Modal from '@mui/material/Modal';

const BookNow: FC<{ open: boolean, setBook: (x: boolean) => void }> = ({ open, setBook }) => {
    const handleClose = () => setBook(false);
    console.log("book now");

    useEffect(() => {
        return () => {
            setBook(false);
        }
    }, [open]);
    const style = {
        position: 'absolute' as 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        // border: '2px solid #000',
        boxShadow: 24,
        // p: 4,
    };

    return (
        <>
            <Modal

                open={open}
                // onClose={() => setBook(false)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Alert severity="info"
                        sx={{ p: 4 }}
                    >

                        <Typography id="modal-modal-title" variant="h6" component="h2">
                            Check Availability
                        </Typography>
                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                            We make our bookings using nightbrigde, click Proceed to continue
                        </Typography>
                        <Box
                            sx={{
                                mt: "1rem",
                                display: "flex",
                                // justifyContent
                                gap: '1rem'
                            }}
                        >
                            <Button
                                variant="contained"
                                color='primary'
                                sx={{ px: 7 }}
                                onClick={() => setBook(false)}
                            >Proceed</Button>
                            <Button
                                variant='contained'
                                color="error"
                                disableElevation
                                onClick={() => setBook(false)}
                            >Close</Button>
                        </Box>
                    </Alert>
                </Box>
            </Modal>
        </>
    );
}

export default BookNow;