import { CHANGE_FILTER_OPTIONS } from "./filterOptionsTypes"
import { IinitalState, Iaction } from './filter.interfaces'

const initialState: IinitalState = {
    adults: 1,
    children: 0,
    stars: 1
}

export const filterOptionsReducer = (state = initialState, action: Iaction) => {
    switch (action.type) {
        case CHANGE_FILTER_OPTIONS:
            return {
                ...state,
                [action.stateName]: action.payload
            }
        default:
            return state
    }
}
