import styled, { css } from "styled-components";
import { MmascoUniversalInterface } from "../../../../interfaces";
import { SxQueries } from "../../../../utils";

export interface Props extends MmascoUniversalInterface<string> {
    item?: boolean,
    container?: boolean,
    xs?: number,
    small?: number,
    medium?: number,
    large?: number,
    spacing?: number
}

interface GridI {
    toggle?: { item?: boolean, container?: boolean },
    basis?: { xs?: number, small?: number, medium?: number, large?: number },
    spacing?: number
}

const FlexWidth = ({ flex }: { flex?: number }) => {
    return css`
        flex-basis: ${flex !== undefined && (flex / 12) * 100}%;
        max-width: ${flex !== undefined && (flex / 12) * 100}%;
    `
}

const GridStyle = ({ toggle, basis, spacing }: GridI) => {
    if (toggle?.container) {
        return css`
            display: flex;
            flex-wrap: wrap;
            flex-direction: row;
            `
    }
    if (toggle?.item) {
        return css`
            padding-left: ${spacing ? `${(spacing * 8) / 16}rem` : 0};
            padding-top: ${spacing ? `${(spacing * 8) / 16}rem` : 0};
            flex-basis: ${basis?.xs !== undefined && (basis?.xs / 12) * 100}%;
            max-width: ${basis?.xs !== undefined && (basis?.xs / 12) * 100}%;

            @media (min-width: 600px) {
                flex-grow: 0;
                ${FlexWidth({ flex: basis?.small })}
            }
            @media (min-width: 600px) {
                ${FlexWidth({ flex: basis?.medium })}
            }
            @media (min-width: 600px) {
                ${FlexWidth({ flex: basis?.large })}
            }
        `
    }

    return;
}


export const Nqaba = styled.div<Props>`
    ${(props) => GridStyle({
    toggle: {
        item: props.item,
        container: props.container
    },
    basis: {
        xs: props.xs,
        small: props.small,
        medium: props.medium,
        large: props.large
    },
    spacing: props.spacing
})};

    ${SxQueries}
`