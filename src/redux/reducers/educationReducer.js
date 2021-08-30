import { initialState } from "../initialState";

export default function educationReducer(state = initialState.educationDetails, action) {
  console.log(action, state)
  switch (action.type) {
    case actionsCodes.ADD_EDUCATION:
      return action.payload;
    case actionsCodes.UPDATE_EDUCATION:
      return { ...state, ...action.payload }
    default: return state;
  }
}