import React, { FC } from 'react';
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Icon from "@mui/material/Icon";
import ListItemText from "@mui/material/ListItemText";
import { useRouter } from 'next/router';
import Image from 'next/image';
import { projectColors, projectFonts } from '../../src/styles/theme';

interface LogoProps {
    vals: boolean
}

interface ListTextProps {
    link: string,
    sm?: boolean
}

interface FaqsButtonProps {
    vals: boolean,
    ico: JSX.Element,
    setValue: () => void
}
export const LogoComponent: FC<LogoProps> = ({ vals }) => {
    const router = useRouter();
    return (
        <Button
            disabled={vals}
            color="primary"
            component="a"
            onClick={() => router.push('/')}
        >
            <Image
                src="/vectors/logo.svg"
                width={128} height={32}
                layout="fixed"
                alt="nqabanqaba logo"
                priority
            />
        </Button>
    )
}

export const ListTextComponent: FC<ListTextProps> = ({ link, sm }) => {
    return (
        <ListItemText primary={link}
            sx={{
                width: "96px",
                display: "flex",
                alignItems: "center",
                justifyContent: sm ? "flex-start" : "center",
                fontFamily: projectFonts.primary,
                marginLeft: sm ? "24px" : undefined,
                textDecoration: sm ? "underline" : undefined
            }}
        />
    )
}

export const FaqsButtonComponent: FC<FaqsButtonProps> = ({ vals, ico, setValue }) => {
    return (
        <Button variant="outlined"
            onClick={setValue}
            sx={{
                display: 'flex',
                alignItems: 'center',
                marginRight: "16px",
                backgroundColor: projectColors.bgsecondary,
                color: vals ? "red" : projectColors.tertiary,
                border: vals ? "1px solid red" : "1px solid blue"
            }}>
            <Typography variant="h6" sx={{
                fontSize: "14px",
                lineHeight: "1.5",
            }}>FAQs</Typography>
            <Icon
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    marginLeft: '8px'
                }}
            >
                {ico}
            </Icon>
        </Button>
    )
}