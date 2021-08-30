import { initialState } from "../initialState";

export default function documentReducer(state = initialState.document, action) {
  console.log(action, state)
  switch (action.type) {
    default:
      return state;
  }
}