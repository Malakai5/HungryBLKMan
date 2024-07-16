export type slideItemType = {
    imageSrc: string;
    imageAlt: string;
}

export type location = {
    id: number;
    state: string;
    city: string;
    zipcode: number;
    streetName: string;
    addressNumber: number;
    unit_number: number;
}

export type restaurant = {
    name: string;
    id: number;
    type: string;
    location: location;
    priceRange: number;
    rating: number;
}
