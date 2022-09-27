import React, { FC } from 'react';
import Link from 'next/link';
import { withRouter } from 'next/router';
import Box from "@mui/material/Box";
import styled from "@emotion/styled";
import { projectColors } from '../styles/theme';

interface Props {
    router: any,
    href: string,
    children: JSX.Element
}

const Container = styled(Box) <{ active: boolean }>`
    color: ${({ active }) => active ? projectColors.tertiary : projectColors.primary};
`

const Hocs: FC<Props> = ({ router, href, children }) => {

    const isActive = router.pathname === href || router.asPath === href;
    return (
        <Container active={isActive}>
            <Link href={href} passHref>
                {children}
            </Link>
        </Container>
    )
}

export default withRouter(Hocs)