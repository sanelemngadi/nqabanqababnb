

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
    height: number
}

export interface ReviewI {
    title: string,
    author: string,
    good: string,
    bad: string,
    date: string,
    rate: string
}