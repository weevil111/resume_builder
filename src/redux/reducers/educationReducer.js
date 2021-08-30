import { initialState } from "../initialState";

export default function educationReducer(state = initialState.educationDetails, action) {
  console.log(action, state)
  switch (action.type) {
    default:
      return state;
  }
}