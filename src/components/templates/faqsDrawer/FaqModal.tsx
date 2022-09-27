import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Modal from '@mui/material/Modal';
import FaqsCard from './FaqsCard';
import { faqs } from '../../../../data';
import { useFaqsContext } from '../../../context';

const style = {
    position: 'absolute' as 'absolute',
    top: { xs: "calc((100% - (100% - 152px - 64px))/2)", md: "calc((100% - (100% - 184px - 120px))/2)" },
    left: { xs: "calc((100vw - 95vw)/2)", md: "calc((100vw - 90vw)/2)" },
    right: 0,
    bottom: 0,
    maxWidth: { xs: '95vw', md: "90vw" },
    maxHeight: { xs: "calc(100vh - 152px)", md: "calc(100vh - 184px)" },
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
    overflow: "auto",
    borderRadius: "1rem"
};

const FaqsModal = () => {
    const [open, setOpen] = React.useState(false);
    const handleClose = () => setOpen(false);

    const { vals, setValue } = useFaqsContext();

    return (
        <div>
            <Modal
                open={vals}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                disableScrollLock

                onBackdropClick={() => setValue(false)}
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
        </div >
    );
}

export default FaqsModal;
