import { Action, createReducer, on } from '@ngrx/store';
import { registerStart } from './action';

const globalState = {
    isLoader:false,

}
const RegisterReducers = createReducer(
    globalState,
    on(registerStart,(state:any)=>({...state,isLoader:true}))
)