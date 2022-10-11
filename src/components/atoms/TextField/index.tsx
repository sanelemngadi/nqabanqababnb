import React, { FC } from 'react';
import styled, { css } from 'styled-components';
import { UniversalComponentPropsInterface } from '../../../interfaces';
import { Nqabanqaba, SSROnly } from "../../../styled.globals"
import { MediaQuery } from '../../../utils';

interface Props extends UniversalComponentPropsInterface<string> {
    type?: string,
    label?: string,
    formType: "outlined" | "contained" | "standard",
    name?: string,
    id?: string
}

const Variant = ({ formType }: { formType: "outlined" | "contained" | "standard" }) => {
    if (formType === "outlined") {
        return css`
            border: 1px solid silver;

            &:active, &:focus{
                border: 1px solid transparent;
                outline: 1px solid black;
            }
        `
    }

    if (formType === "contained") {
        return css`
            border: 1px solid silver;

            &:active, &:focus{
                border: 1px solid transparent;
                outline: 1px solid black;
            }
        `
    }
    if (formType === "standard") {
        return css`
            border: 1px solid silver;

            &:active, &:focus{
                border: 1px solid transparent;
                outline: 1px solid black;
            }
        `
    }
}
const Wrapper = styled.div<Props>`
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
const Label = styled.label<{ formType: "outlined" | "contained" | "standard" }>`
    input{
        border: none;
        height: 48px;
        width: 100%;
        padding: 1rem;
        ${(props) => Variant({ formType: props.formType })}
    }

    span{
        ${SSROnly}
    }    
`


const TextField: FC<Props> = ({ sx, sm, md, lg, formType, label, type, name, id }) => {
    return (
        <Wrapper
            sx={sx} sm={sm} md={md} lg={lg}
            formType={formType} variant="div"
        >
            <Label
                htmlFor={id}
                formType={formType}
            >
                <span>{label}</span>
                <input aria-invalid="false" type={type} name={name}
                    placeholder={label} id={id} />
            </Label>
        </Wrapper>
    )
}

export default TextField