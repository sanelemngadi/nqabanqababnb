import styled, { css } from "styled-components";
import { UniversalComponentPropsInterface } from "../../../../interfaces";
import { MediaQuery } from "../../../../utils";

export interface Props extends UniversalComponentPropsInterface<string> {
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
                /* flex-basis: ${basis?.small !== undefined && (basis?.small / 12) * 100}%;
                max-width: ${basis?.small !== undefined && (basis?.small / 12) * 100}%; */
            }
            @media (min-width: 600px) {
                ${FlexWidth({ flex: basis?.medium })}
                /* flex-basis: ${basis?.medium !== undefined && (basis?.medium / 12) * 100}%;
                max-width: ${basis?.medium !== undefined && (basis?.medium / 12) * 100}%; */
            }
            @media (min-width: 600px) {
                ${FlexWidth({ flex: basis?.large })}
                /* flex-basis: ${basis?.large !== undefined && (basis?.large / 12) * 100}%;
                max-width: ${basis?.large !== undefined && (basis?.large / 12) * 100}%; */
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

    ${({ sx }) => sx};
    /* @media (min-width: 600px) {
      ${({ sm }) => sm};    
    }

    @media (min-width: 900px) {
      ${({ md }) => md};    
    }

    @media (min-width: 1200px) {
      ${({ lg }) => lg};    
    } */
    ${(props) => MediaQuery(props)}
`