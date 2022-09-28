import React, { FC } from 'react';
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import { projectColors, projectFonts } from '../src/styles/theme';
import Link from 'next/link';
import styled from '@emotion/styled';
import { Headings } from '../src/styles/footer';
import TextIcon from '../src/components/molecules/TextIcon';
import SocialIcons from '../src/components/molecules/SocialIcons';
import MetaData from '../meta';

const ContactForm = styled.form`
    display: block;
    grid-area: one;
    padding: 1rem 0;
`

const ContactDetails = styled(Box)`
    grid-area: two;
    padding: 1rem;
`

const ContactContainer = styled(Box)`
    display: grid;
    grid-template-columns:1fr;
    grid-template-areas: "two"
                         "one";
    
    @media (min-width: 768px){
        grid-template-columns: 3fr 1fr;
        grid-template-areas: "one two";
    }
    margin-top: "32px";
`

const ContactUs: FC = () => {

    return (
        <>
            <MetaData
                title='Nqabanqaba | Contact Us'
                subtitle="If you have a question don't hasitate to drop us a text message, we are more than happy to clear your confusion."
                image='https://nqabanqaba.netlify.app/images/backyard.jpg' />

            <Box>

                <Box
                    sx={{
                        height: { xs: 256, md: 345 },
                        backgroundImage: "url(/images/backyard.jpg)",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                        backgroundAttachment: "fixed",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: 'center',
                        textAlign: 'center',
                    }}
                >

                    <Typography variant="caption"
                        sx={{
                            fontSize: { xs: "16px", md: "24px" },
                            fontFamily: projectFonts.secondary,
                            color: projectColors.secondary
                        }}
                    >
                        <Link href="/"><a style={{ color: projectColors.secondary }}>Home</a></Link> - Contact
                    </Typography>
                    <Typography variant="h1"
                        sx={{
                            fontSize: { xs: "32px", md: "48px" },
                            fontFamily: projectFonts.secondary,
                            color: projectColors.light
                        }}
                    >
                        How can we halp you?
                    </Typography>
                </Box>
                <Container maxWidth="lg">
                    <Box>
                        <Typography variant="h1"
                            sx={{
                                fontSize: { xs: "24px", md: "32px" },
                                fontFamily: projectFonts.secondary,
                                color: projectColors.primary,
                                textAlign: 'center',
                                marginTop: "48px",
                                marginBottom: "10px",
                            }}
                        >
                            Get in touch with us
                        </Typography>
                        <Typography variant="h1"
                            sx={{
                                fontSize: { xs: "16px", md: "18px" },
                                fontFamily: projectFonts.primary,
                                color: projectColors.primary,
                                textAlign: 'center',
                                marginBottom: "24px",
                                maxWidth: { xs: "500px", md: "500px" },
                                margin: { xs: "8px auto", md: "24px auto" },
                                padding: "2px"
                            }}
                        >
                            If you have a question don&#39;t hasitate to drop us a text message, we are more than happy to clear your confusion.
                        </Typography>
                    </Box>
                    <ContactContainer>
                        <ContactForm
                            method='POST'
                            action='/sucess/'
                            name="Contacts"
                            data-netlify="true"
                            onSubmit={() => 'submit'}
                            data-netlify-honeypot='bot-field'

                        >
                            <input name="bot-field" style={{ display: "none" }} />
                            <input type="hidden" name="form-name" value='Contacts' />
                            <TextField
                                fullWidth
                                id="outlined-basic"
                                label="Name"
                                variant="outlined"
                                name='name'
                            />
                            <TextField
                                type='email'
                                fullWidth
                                sx={{ marginTop: "1rem", marginBottom: "1rem" }}
                                id="outlined-basic"
                                label="Email"
                                variant="outlined"
                                name='email'
                            />
                            <TextareaAutosize
                                aria-label="minimum height"
                                minRows={10}
                                cols={30}
                                placeholder="Message"
                                name='message'
                                style={{ width: "100%" }}
                            />

                            <div>
                                <Button variant="outlined"
                                    type='submit'>Send Messgae</Button>
                            </div>
                        </ContactForm>
                        <ContactDetails>

                            <Headings
                                sx={{
                                    color: "black !important"
                                }}
                            >Write Us</Headings>
                            <TextIcon elem={<span></span>} label='www.nqabanqaba.co.za' bg='white' color={projectColors.secondary} />
                            <Headings
                                sx={{
                                    color: "black !important",
                                }}
                            >Call Us</Headings>
                            <TextIcon
                                elem={<span></span>}
                                label='+2760701396'
                                bg='white'
                                color={projectColors.secondary}
                            />
                            <Headings
                                sx={{
                                    color: "black !important"
                                }}>Visit Us</Headings>
                            <TextIcon elem={<span></span>} label='64 Marlynhoek Meer en see, Richards Bay,3901, South Africa' color={projectColors.secondary} />
                            <Headings
                                sx={{
                                    color: "black !important"
                                }}>Socialize with Us</Headings>
                            <Box sx={{ maxWidth: "96px" }}>
                                <SocialIcons small={false} />
                            </Box>
                        </ContactDetails>
                    </ContactContainer>
                </Container>
            </Box>
        </>
    )
}

export default ContactUs