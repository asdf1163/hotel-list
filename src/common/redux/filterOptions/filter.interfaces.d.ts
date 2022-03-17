export interface IchangeOption {
    stateName: 'adults' | 'children' | 'stars'
    result: number
}

export interface IinitalState {
    adults: number
    children: number
    stars: number
}

export interface Iaction {
    type: string
    stateName: string
    payload: object
}