export interface IhotelData {
    id: string;
    images?: object[];
    name: string;
    address1?: string;
    address2?: string;
    starRating: number;
    town: string;
    country: string;
}

export interface IroomProps {
    occupancy: { maxAdults: number; maxChildren: number };
}