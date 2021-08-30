import { initialState } from "../initialState";

export default function contactReducer(state = initialState.contactSection, action) {
  switch (action.type) {
    case actionTypes.ADD_CONTACT:
      return action.payload;
    case actionTypes.UPDATE_CONTACT:
      return { ...state, ...action.payload }
    default:
      return state;

  }
}