import React, { FC, useEffect } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Modal from '@mui/material/Modal';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import FaqsCard from './FaqsCard';
import { faqs } from '../../../../data';
import CancelIcon from '@mui/icons-material/Cancel';

import { styled } from "@mui/material/styles";
import { projectColors } from '../../../styles/theme';

const style = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: '100%',
    height: '100%',
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
    overflow: "auto",
    zIndex: '2020'
};

const CancelModalButton = styled(Grid)(() => ({
    width: "3rem",
    position: 'fixed',
    top: '1rem',
    right: '1rem',
}))

interface Props {
    showFaqsModal: boolean,
    setShowFaqsModal(x: boolean): void
}

const FaqsModal: FC<Props> = ({ showFaqsModal, setShowFaqsModal }) => {
    const handleClose = () => setShowFaqsModal(false);

    useEffect(() => {
        if (showFaqsModal) {
            document.body.style.height = '100vh';
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.height = 'unset';
            document.body.style.overflow = 'unset';
        }
    }, [showFaqsModal]);
    return (
        <div>
            <Modal
                open={showFaqsModal}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                disableScrollLock
            >
                <Box>
                    <Box sx={style}>
                        <Grid container spacing={1}>
                            <CancelModalButton item>
                                <Paper
                                    sx={{
                                        backgroundColor: projectColors.primary,
                                        ':hover': {
                                            background: projectColors.secondary,
                                            color: projectColors.primary,
                                        }
                                    }}
                                >
                                    <IconButton
                                        color="error"
                                        onClick={() => setShowFaqsModal(false)}
                                    >
                                        <CancelIcon fontSize='small' />
                                    </IconButton>
                                </Paper>
                            </CancelModalButton>
                            {faqs.map((i, index) => (
                                <Grid key={'faq-' + index} item xs={12} sm={6} md={4}>
                                    <FaqsCard {...i} />
                                </Grid>
                            ))}
                        </Grid>
                    </Box>
                </Box>
            </Modal>
        </div >
    );
}

export default FaqsModal;
