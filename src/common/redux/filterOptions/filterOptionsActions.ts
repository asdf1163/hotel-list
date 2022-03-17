import { store } from "../store"
import { CHANGE_FILTER_OPTIONS } from "./filterOptionsTypes"
import { IchangeOption } from './filter.interfaces'

export const changeOption = ({ stateName, result }: IchangeOption) => {

    let newValue
    if (stateName === 'stars') {
        newValue = result;
    }
    else {
        newValue = store.getState().filterOptions[stateName] + result;
    }
    if (newValue > 0)
        return {
            type: CHANGE_FILTER_OPTIONS,
            payload: newValue,
            stateName
        }
    else
        return {
            type: CHANGE_FILTER_OPTIONS,
            payload: 0,
            stateName
        }
}
