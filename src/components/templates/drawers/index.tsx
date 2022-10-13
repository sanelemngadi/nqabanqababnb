import React, { FC } from 'react';
import { useRouter } from 'next/router';

import { slugify } from '../../../utils';
import { projectColors } from '../../../styles/theme';

import { Headings } from '../../../styles/footer';
import EmailBox from '../../molecules/EmailBox';
import TextIcon from '../../molecules/TextIcon';

import { ImCancelCircle } from "react-icons/im"
import { FiArrowUpRight } from "react-icons/fi"
import { GoLocation } from "react-icons/go";
import { BsTelephone } from "react-icons/bs";
import { ListTextComponent } from '../../../../hocs/navigationComponents';
import ActiveLink from '../../../context/ActiveLink';

import Box from '@mmasco-atoms/Box';
import Divider from '@mmasco-atoms/Divider';
import Container from '@mmasco-atoms/Container';
import Button from '@mmasco-atoms/Button';
import IconButton from '@mmasco-atoms/IconButton';
import Typography from '@mmasco-atoms/Typography';
import Drawer from '@mmasco-atoms/Drawer';
import UnOrderedList from '@mmasco-atoms/UnOrderedList';
import ListItem from '@mmasco-atoms/ListItem';

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
                            link={link}
                        />
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
                    <FiArrowUpRight size={24} />
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
                    elem={<BsTelephone color={projectColors.primary} size={24} />}
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
                    elem={<GoLocation color={projectColors.primary} size={24} />}
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
                        <ImCancelCircle size={24} />
                    </Button>
                    {list()}
                </Box>
            </Container>
        </Drawer>
    );
}


export default MenuDrawer;