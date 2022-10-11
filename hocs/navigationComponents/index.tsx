import React, { FC } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { projectColors, projectFonts } from '../../src/styles/theme';

import Button from '@mmasco-atoms/Button';
import Typography from '@mmasco-atoms/Typography';
import Box from '@mmasco-atoms/Box';

interface ListTextProps {
    link: string,
    sm?: boolean
}

interface FaqsButtonProps {
    ico: JSX.Element,
    setShowFaqsModal: () => void,
}
export const LogoComponent: FC = () => {
    const router = useRouter();
    return (
        <Button
            color="primary"
            component="a"
            type="button"
            onClick={() => router.push('/')}
            sx={{ padding: "4px 1.5rem 4px 0" }}
        >
            <Image
                src="/vectors/logo.svg"
                width={'128'} height={'32'}
                layout="fixed"
                alt="nqabanqaba logo"
                priority={true}
            />
        </Button>
    )
}

export const ListTextComponent: FC<ListTextProps> = ({ link, sm }) => {
    return (
        <Box
            component={'span'}
            sx={{
                width: "96px",
                display: "flex",
                alignItems: "center",
                justifyContent: sm ? "flex-start" : "center",
                fontFamily: projectFonts.primary,
                marginLeft: sm ? "24px" : undefined,
                textDecoration: sm ? "underline" : undefined,
                textTransform: 'uppercase',
                fontWeight: 500
            }}
        >{link}</Box>
    )
}

export const FaqsButtonComponent: FC<FaqsButtonProps> = ({ ico, setShowFaqsModal }) => {
    return (
        <Button
            variant="outlined"
            onClick={setShowFaqsModal}
            color="tertiary"
            type="button"
            sx={{
                display: 'flex',
                alignItems: 'center',
                marginRight: "16px",
                backgroundColor: projectColors.bgsecondary,
                color: projectColors.tertiary,
                borderRadius: 0,
                border: `1px solid ${projectColors.bgsecondary} !important`

            }}>
            <Typography
                variant="h6"
                sx={{
                    fontSize: "14px",
                    lineHeight: "1.5",
                    fontFamily: projectFonts.primary,
                    fontWeight: 500,
                }}>FAQs</Typography>
            <span
                style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    marginLeft: '8px',
                    width: '1rem',
                    height: '1rem',
                }}
            >
                {ico}
            </span>
        </Button >
    )
}