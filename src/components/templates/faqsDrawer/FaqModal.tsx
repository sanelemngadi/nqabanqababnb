import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Modal from '@mui/material/Modal';
import FaqsCard from './FaqsCard';
import { faqs } from '../../../../data';
import { useFaqsContext } from '../../../context';

const style = {
    position: 'absolute' as 'absolute',
    top: "calc(70px + 10px)",
    left: "calc((100vw - 90vw)/2)",
    right: 0,
    bottom: 0,
    maxWidth: "90vw",
    height: "calc(100vh - 48px - 40px)",
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
    overflow: "auto"
};

const FaqsModal = () => {
    const [open, setOpen] = React.useState(false);
    const handleClose = () => setOpen(false);

    const { vals } = useFaqsContext();

    return (
        <div>
            <Modal
                open={vals}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Grid container spacing={1}>
                        {faqs.map((i, index) => (
                            <Grid key={'faq-' + index} item xs={12} sm={6} md={4}>
                                <FaqsCard {...i} />
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </Modal>
        </div>
    );
}

export default FaqsModal;
