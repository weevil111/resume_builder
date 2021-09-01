import * as actionsCodes from '../actions/actionTypes'
import initialState from './initialState.json'
export default function educationReducer(state = initialState.educationSection, action) {
    switch (action.type) {
        case actionsCodes.ADD_EDUCATION:
            return {
                ...action.educationSection
            }
        case actionsCodes.UPDATE_EDUCATION:
            return {
                ...state, ...action.educationSection
            }
        default: return state;
    }
}