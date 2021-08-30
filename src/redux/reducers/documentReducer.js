import { initialState } from "../initialState";

export default function documentReducer(state= initialState.document, action){
  console.log(action,state)
  switch(action.type){
      case actionTypes.SET_SKIN:
         return  action.payload;
         case actionTypes.UPDATE_SKIN:
          return  {...state, skinCode: action.payload};
      default:
           return state;  
  }
}