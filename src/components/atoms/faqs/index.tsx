import React from 'react';
import { styled } from '@mui/material/styles';
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordionSummary, {
    AccordionSummaryProps,
} from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import { Wrapper, Text } from '../../../styles/faqs';

import { faqs } from '../../../../data';
import { projectColors } from '../../../styles/theme';


const Accordion = styled((props: AccordionProps) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
    '&:not(:last-child)': {
        borderBottom: 0,
    },
    '&:before': {
        display: 'none',
    },
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
    <MuiAccordionSummary
        expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: { sm: '0.9rem' } }} />}
        {...props}
    />
))(({ theme }) => ({
    backgroundColor: projectColors.light,
    flexDirection: 'row-reverse',
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
        transform: 'rotate(90deg)',
    },
    '& .MuiAccordionSummary-content': {
        marginLeft: theme.spacing(1),
    }
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),
    borderTop: '1px solid rgba(0, 0, 0, .125)',

}));

const FAQ = () => {
    const [expanded, setExpanded] = React.useState<string | false>('panel1');

    const handleChange =
        (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
            setExpanded(newExpanded ? panel : false);
        };

    return (
        <Wrapper>
            {
                faqs.slice(0, 3).map((faq, idx) => (
                    <Accordion key={"i" + idx} expanded={expanded === `panel${idx}`} onChange={handleChange(`panel${idx}`)}>
                        <AccordionSummary aria-controls={`panel${idx}d-content`} id={`panel${idx}d-header`}
                            sx={{
                                ['.Mui-expanded']: {
                                    color: "red",
                                    backgroundColor: 'green'
                                }
                            }}
                        >
                            <Text variant="h6" sx={{ fontSize: "16px", lineHeight: "1.2" }}>{faq.q}</Text>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Text
                                sx={{
                                    maxWidth: "768px",
                                    justifyContent: "center",
                                    paddingLeft: "32px"
                                }}
                            >
                                {faq.a}
                            </Text>
                        </AccordionDetails>
                    </Accordion>
                ))
            }
        </Wrapper>
    );
}


export default FAQ;