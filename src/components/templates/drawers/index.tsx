import React, { FC } from 'react';

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
import Box from '../../atoms/Box';
import Divider from '../../atoms/Divider';
import Container from '../../atoms/Container';
import Button from '../../atoms/Button';
import IconButton from '../../atoms/IconButton';
import Typography from '../../atoms/Typography';
import Drawer from '../../atoms/Drawer';
import UnOrderedList from '../../atoms/UnOrderedList';
import ListItem from '../../atoms/ListItem';

type Anchor = 'top';

const links = [
    "Home", "Our Rooms", "About Us", "Contact Us"
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

    const toggleDrawer = (event: React.KeyboardEvent | React.MouseEvent) => {
        if (
            event.type === 'keydown' &&
            ((event as React.KeyboardEvent).key === 'Tab' ||
                (event as React.KeyboardEvent).key === 'Shift')
        ) {
            return;
        }

        setState(false);
    };

    const list = () => (
        <Box
            sx={{ width: 'auto', minHeight: "100vh" }}
            onClick={(e: any) => toggleDrawer(e)}
            onKeyDown={(e: any) => toggleDrawer(e)}
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
            <UnOrderedList>
                {links.map((link, idx) => (
                    <ListItem
                        key={"i-" + idx}>
                        <ActiveLink
                            href={link === "Home" ? "/" : `/${slugify(link)}`}
                        >
                            <Button
                                type="button"
                                sx={{
                                    paddingLeft: "0px",
                                    paddingRight: "0px",
                                    width: "100%"
                                }}
                            >
                                <ListTextComponent
                                    link={link}
                                    sm
                                />
                            </Button>

                        </ActiveLink>
                    </ListItem>
                ))}
            </UnOrderedList>
            <Divider />
            <Button
                type="button"
                onClick={() => handleActions("Book now")}
                sx={{
                    display: 'flex',
                    width: "100%",
                    alignItems: 'center',
                    justifyContent: 'flex-start'
                }}
            >
                <IconButton
                    component={'span'}
                >
                    <ArrowOutwardIcon />
                </IconButton>
                <Typography
                    sx={{
                        fontWeight: 500
                    }}
                >Book now</Typography>
            </Button>
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
                <EmailBox bg={projectColors.light} color={projectColors.primary} />
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
        <Drawer
            open={state}
            sx={{
                zIndex: state ? "2000" : "-200",
                postion: "relative"
            }}
        >
            <Container>
                <Box>
                    <Button
                        type="button"
                        sx={{
                            position: "fixed",
                            right: "1rem",
                            top: "1rem",
                            zIndex: state ? "700" : "0",

                        }}
                        onClick={(e: any) => toggleDrawer(e)}
                    >
                        <CancelIcon />
                    </Button>
                    {list()}
                </Box>
            </Container>
        </Drawer>
    );
}


export default MenuDrawer;