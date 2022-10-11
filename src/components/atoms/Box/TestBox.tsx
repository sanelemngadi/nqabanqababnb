import React, { FC } from 'react';
import styled, { css } from 'styled-components';
import { MmascoUniversalInterface, CssValueQueries } from '../../../interfaces';
import * as CSS from "csstype"

interface Props extends MmascoUniversalInterface<string> { } // extending the universal interface

export const MediaQuery = (sx?: CSS.Properties<string | number | CssValueQueries>) => {
    return Object.entries(sx ? sx : {}).reduce<any>(
        ({
            xs: XS, sm: SM, md: MD, lg: LG }: any,
            [property, value]
        ) => {
            if (typeof value === "object") {
                if (value?.xs) { XS[property] = value?.xs; }
                if (value?.sm) { SM[property] = value?.sm; }
                if (value?.md) { MD[property] = value?.md; }
                if (value?.lg) { LG[property] = value?.lg; }
            } else { XS[property] = value; }

            return { xs: XS, sm: SM, md: MD, lg: LG };

        }, { xs: {}, sm: {}, md: {}, lg: {} });
}
const InnerQuery = (px: number, len: string, sx?: CSS.Properties<string | number | CssValueQueries>) => {
    return css`
        @media (min-width: ${px}px){
            ${Object.keys(MediaQuery(sx).sm).length > 0 && MediaQuery(sx)[len]}
        }
    `
}

const Wrapper = styled.div<Props>`
    ${(props) => InnerQuery(0, "xs", props?.sx)}
    ${(props) => InnerQuery(600, "sm", props?.sx)}
    ${(props) => InnerQuery(900, "md", props?.sx)}
    ${(props) => InnerQuery(1200, "lg", props?.sx)}
`

const TestBox: FC<Props> = (props) => {

    return (
        <Wrapper {...props}
            as={props.component !== undefined ? props.component : "div"}
        >
            {props.children}
        </Wrapper>
    )
}

export default TestBox