export interface ProductDetailsProps {
    selectedDisplay: string,
    product: {
        title: string,
        description: string,
        image: string
    }
}

export interface ProductDetailsStyleProps {
    imageSrc: string,
    isLoaded: boolean
}