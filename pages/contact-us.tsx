import React, { FC } from 'react';
import { projectColors, projectFonts } from '../src/styles/theme';
import Link from 'next/link';
import styled from 'styled-components';
import { Headings } from '../src/styles/footer';
import TextIcon from '../src/components/molecules/TextIcon';
import SocialIcons from '../src/components/molecules/SocialIcons';
import MetaData from '../meta';
import MiniFaqs from '../src/components/molecules/minifaqs';

import Box from '@mmasco-atoms/Box';
import Typography from '@mmasco-atoms/Typography';
import TextField from '@mmasco-atoms/TextField';
import Button from '@mmasco-atoms/Button';
import Container from '@mmasco-atoms/Container';

const ContactForm = styled.form`
    display: block;
    grid-area: one;
    padding: 1rem 0;
`

const ContactDetails = styled.div`
    grid-area: two;
    padding: 1rem;
`

const ContactContainer = styled(Container)`
    display: grid;
    grid-template-columns:1fr;
    grid-template-areas: "one"
                         "two";
    
    @media (min-width: 768px){
        grid-template-columns: 3fr 1fr;
        grid-template-areas: "one two";
    }
    margin-top: "32px";
`

const TextArea = styled.label`
    width: 100%;

    textarea{
        width: 100%;
        padding: 1rem;
    }
`

const ContactUs: FC = () => {

    return (
        <>
            <MetaData
                title='Nqabanqaba B&B | Contact Us'
                subtitle="If you have a question don't hasitate to drop us a text message, we are more than happy to clear your confusion."
                path={`/contact-us`}
                image='https://nqabanqaba.netlify.app/images/backyard.jpg' />

            <Box>

                <Box
                    sx={{
                        height: { xs: '256px', md: "345px" },
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

                    <Typography variant="h3"
                        sx={{
                            fontSize: { xs: "16px", md: "24px" },
                            fontFamily: projectFonts.secondary,
                            color: projectColors.secondary
                        }}
                    >
                        <Link href="/"><a style={{ color: projectColors.secondary }}>Home</a></Link>
                        <span>&nbsp;- Contact</span>
                    </Typography>
                    <Typography
                        variant="h1"
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
                        <Typography
                            variant="h1"
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
                        <Typography
                            variant="h1"
                            sx={{
                                fontSize: { xs: "16px", md: "18px" },
                                fontFamily: projectFonts.primary,
                                color: projectColors.primary,
                                textAlign: 'center',
                                marginBottom: "24px",
                                maxWidth: "500px",
                                margin: { xs: "8px auto", md: "24px auto" },
                                padding: "2px"
                            }}
                        >
                            If you have a question don&#39;t hasitate to drop us a text message, we are more than happy to clear your confusion. &times;
                        </Typography>
                    </Box>
                    <Box
                        sx={{
                            maxWidth: '700px',
                            margin: '0 auto'
                        }}
                    >
                        <MiniFaqs />
                    </Box>
                    <ContactContainer
                        maxWidth='md'
                    >
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
                                type="text"
                                id="outlined-basic1"
                                label="Name"
                                formType="outlined"
                                name='name'
                            />
                            <TextField
                                type='email'
                                sx={{ marginTop: "1rem", marginBottom: "1rem" }}
                                id="outlined-basic2"
                                label="Email"
                                formType="standard"
                                name='email'
                            />
                            <TextArea htmlFor="message">
                                <span>Enter Your Message</span>
                                <textarea name="message" id="message" cols={30} rows={5} placeholder='Message'>

                                </textarea>
                            </TextArea>

                            <div>
                                <Button
                                    variant="outlined"
                                    type='submit'
                                    color="primary"
                                    sx={{ minWidth: { xs: "100%", sm: "256px" } }}
                                >Send Messgae</Button>
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
                                <SocialIcons />
                            </Box>
                        </ContactDetails>
                    </ContactContainer>
                </Container>
            </Box>
        </>
    )
}

export default ContactUs