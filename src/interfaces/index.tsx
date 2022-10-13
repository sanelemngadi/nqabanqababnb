import { HTMLAttributes, CSSProperties, ReactNode, ComponentType } from 'react';
import { Interpolation } from 'styled-components';
import * as CSS from "csstype"

interface Features {
    id: number,
    item: string,
    distance: string
}

export interface SurroundingFeatures {
    name: string,
    features: Features[]
} //this interface defines the shame of the innerCategories object that is located in rootfolder/data/sorrounding.data.ts

export interface ImageFeatures {
    src: string,
    width: number,
    height: number,
    alt: string
}

export interface ReviewI {
    title: string,
    author: string,
    good: string,
    bad: string,
    date: string,
    rate: string
}

export interface UniversalComponentPropsInterface<T> extends HTMLAttributes<HTMLOrSVGElement> {
    children?: ReactNode,
    component?: string | ComponentType<any>,
    variant?: T,
    color?: "primary" | "secondary" | "tertiary",
    sx?: Interpolation<CSSProperties>,
    sm?: Interpolation<CSSProperties>,
    md?: Interpolation<CSSProperties>,
    lg?: Interpolation<CSSProperties>
}
////////////////////////////////////////////////////Universal Interface//////////////////////////////////////
export interface CssValueQueries {
    xs?: string | number,
    sm?: string | number,
    md?: string | number,
    lg?: string | number,
}
interface Obj {
    [key: string]: string | number | CssValueQueries | CSSRule | Interpolation<CSSProperties>
}
export interface MmascoUniversalInterface<T> extends HTMLAttributes<HTMLOrSVGElement> {
    children?: ReactNode,
    component?: string | ComponentType<any>,
    variant?: T,
    color?: "primary" | "secondary" | "tertiary",
    sx?: CSS.Properties<string | number | CssValueQueries> | Obj
}

///this is the interfacen that all the atoms inherit for functionalities like sx={{}} varient={} etc
////////////////////////////////////////////////////End Universal Interface//////////////////////////////////////

