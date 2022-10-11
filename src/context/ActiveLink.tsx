import Link from 'next/link';
import React, { FC } from 'react';
import { withRouter } from 'next/router';

import { projectColors } from '../styles/theme';
import styled from 'styled-components';

import Box from '@mmasco-atoms/Box';

interface Props {
    router: any,
    href: string,
    children: JSX.Element
}

const Container = styled(Box) <{ active: number }>`
    color: ${({ active }) => active ? projectColors.tertiary : projectColors.primary};
`

const ActiveLink: FC<Props> = ({ router, href, children }) => {

    const isActive = router.pathname === href || router.asPath === href;
    return (
        <Container active={isActive ? 1 : 0}>
            <Link href={href}
                passHref
                prefetch={false}
            >
                {children}
            </Link>
        </Container>
    )
}

export default withRouter(ActiveLink)