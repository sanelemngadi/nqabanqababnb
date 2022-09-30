import React, { FC } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { LinkItems } from '../../../styles/appbar';
import { slugify } from '../../../utils';
import { projectColors } from '../../../styles/theme';
import { Headings } from '../../../styles/footer';
import EmailBox from '../../molecules/EmailBox';
import TextIcon from '../../molecules/TextIcon';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneEnabledIcon from '@mui/icons-material/PhoneEnabled';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import CancelIcon from '@mui/icons-material/Cancel';
import ActiveLink from '../../../context/ActiveLink';
import { ListTextComponent } from '../../../../hocs/navigationComponents';
import { useRouter } from 'next/router';

type Anchor = 'top';

const links = [
    "Home", "Our Room", "About Us", "Contact Us"
]
interface Props {
    state: boolean,
    setState(x: boolean): void
}

const MenuDrawer: FC<Props> = ({ state, setState }) => {
    const router = useRouter();
    const today = new Date().toISOString().split('T')[0];

    const handleActions = (action: string): void => {
        if (action.toLowerCase() === "book now") {
            router.push(`https://book.nightsbridge.com/32135?action=2&nbid=952&bbrtid=0&rtgroupid=0&startdate=${today}&enddate=${today}`)

        }
    }

    const toggleDrawer =
        (anchor: Anchor, open: boolean) =>
            (event: React.KeyboardEvent | React.MouseEvent) => {
                if (
                    event.type === 'keydown' &&
                    ((event as React.KeyboardEvent).key === 'Tab' ||
                        (event as React.KeyboardEvent).key === 'Shift')
                ) {
                    return;
                }

                setState(open);
            };

    const list = (anchor: Anchor) => (
        <Box
            sx={{ width: 'auto', minHeight: "100vh" }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <Headings
                sx={{
                    color: projectColors.dark + " !important",
                    display: "flex !important",
                    justifyContent: "center",
                    fontWeight: "700 !important",
                    paddingTop: "16px",
                    marginBottom: "0 !important"
                }}>Pages</Headings>
            <List>
                <LinkItems type={"col"}>
                    {links.map((link, idx) => (
                        <ActiveLink
                            key={"i-" + idx}
                            href={link === "Home" ? "/" : `/${slugify(link)}`}
                        >
                            <ListItemButton
                                sx={{
                                    paddingLeft: "0px",
                                    paddingRight: "0px"
                                }}
                            >
                                <ListTextComponent
                                    link={link}
                                    sm
                                />
                            </ListItemButton>

                        </ActiveLink>
                    ))}
                </LinkItems>
            </List>
            <Divider />
            <List>
                {['Book now'].map((text, index) => (
                    <ListItem key={text + index} disablePadding>
                        <ListItemButton
                            onClick={() => handleActions(text)}
                        >
                            <ListItemIcon>
                                {text === "FAQs" ? <HelpOutlineIcon /> : <ArrowOutwardIcon />}
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
            <Divider />
            <Box
                sx={{
                    padding: "1rem"
                }}>
                <Headings
                    sx={{
                        color: projectColors.dark + " !important",
                        display: "flex !important",
                        justifyContent: "center",
                        fontWeight: "700 !important"
                    }}
                >Contact info</Headings>
                <EmailBox noElevation bg={projectColors.light} color={projectColors.primary} />
                <TextIcon
                    bg={projectColors.light}
                    color={projectColors.primary}
                    label='(+27) 662 971 030'
                    elem={<PhoneEnabledIcon
                        sx={{
                            color: projectColors.primary
                        }} />}
                />

                <Headings
                    sx={{
                        color: projectColors.dark + " !important",
                        display: "flex !important",
                        justifyContent: "center",
                        fontWeight: "700 !important"
                    }}>Address</Headings>
                <TextIcon
                    bg={projectColors.light}
                    color={projectColors.primary}
                    label='64 Marlynhoek Meer en see, Richards Bay,3901, South Africa'
                    elem={<LocationOnIcon
                        sx={{
                            color: projectColors.primary
                        }} />}
                />
            </Box>
        </Box>
    );

    return (
        <Container>
            <Box>
                {(['top'] as const).map((anchor) => (
                    <React.Fragment key={anchor}>
                        <Drawer
                            anchor={anchor}
                            open={state}
                            onClose={toggleDrawer(anchor, false)}
                            sx={{
                                zIndex: state ? "2000" : "-200",
                                postion: "relative"
                            }}
                        >
                            <Button
                                color="error"
                                sx={{
                                    position: "fixed",
                                    right: "1rem",
                                    top: "1rem",
                                    zIndex: state ? "2005" : "0",

                                }}
                                onClick={toggleDrawer(anchor, false)}
                            >
                                <CancelIcon />
                            </Button>
                            {list(anchor)}
                        </Drawer>
                    </React.Fragment>
                ))}
            </Box>
        </Container>
    );
}


export default MenuDrawer;