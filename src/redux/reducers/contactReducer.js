import { initialState } from "../initialState";

export default function contactReducer(state = initialState.contactDetails, action) {
  console.log(action, state)
  switch (action.type) {
    default:
      return state;
  }
}