import React, { FC } from 'react';
import FaqsCard from './FaqsCard';
import { faqs } from '../../../../data';
import { ImCancelCircle } from "react-icons/im"

import { projectColors } from '../../../styles/theme';
import styled from 'styled-components';

import NqabaModal from '@mmasco-atoms/NqabaModal';
import Grid from '@mmasco-atoms/Grid';
import Box from '@mmasco-atoms/Box';
import IconButton from '@mmasco-atoms/IconButton';
import Typography from '@mmasco-atoms/Typography';

const CancelModalButton = styled(Grid)`
    width: 3rem;
    position: fixed;
    top: 1rem;
    right: 1rem;
`

interface Props {
    showFaqsModal: boolean,
    setShowFaqsModal(x: boolean): void
}

const FaqsModal: FC<Props> = ({ showFaqsModal, setShowFaqsModal }) => {

    return (
        <NqabaModal
            open={showFaqsModal}
        >
            <Box>
                <Box sx={{
                    position: 'relative',
                    width: '100%',
                    height: '100%',
                    padding: "0rem",
                    overflow: "auto",
                    zIndex: 400
                }}
                    sm={{ padding: "1rem" }}
                    md={{ padding: "2rem" }}
                >
                    <Typography
                        variant="h5"
                        sx={{
                            color: "#000",
                            fontSize: "32px",
                            padding: '1rem'
                        }}
                    >
                        Frequently Asked Questions
                    </Typography>
                    <Grid container spacing={1}>
                        <CancelModalButton item xs={12}
                            sx={{
                                position: "fixed",
                                top: "1rem",
                                right: "1rem"
                            }}
                        >
                            <Box
                                sx={{
                                    backgroundColor: projectColors.primary,
                                    ':hover': {
                                        background: projectColors.secondary,
                                        color: projectColors.primary,
                                    }
                                }}
                            >
                                <IconButton
                                    onClick={() => setShowFaqsModal(false)}
                                >
                                    <ImCancelCircle size={32} />
                                </IconButton>
                            </Box>
                        </CancelModalButton>

                        <>
                            {faqs.map((i, index) => (
                                <Grid key={'faq-' + index} item xs={12} small={6} medium={4} large={3}>
                                    <FaqsCard {...i} />
                                </Grid>
                            ))}
                        </>
                    </Grid>
                </Box>
            </Box>
        </NqabaModal>
    );
}

export default FaqsModal;
