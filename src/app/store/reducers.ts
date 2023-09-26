import { createReducer, on } from '@ngrx/store';
import { 
    profileSuccess,
    profileStart,
    registerError,
    registerStart,
    registerSuccess,
    profileError,
    managerStart,
    managerSuccess,
    managerError,
    studentsStart,
    studentsSuccess,
    studentsError } from './action';
import { GlobalInterface,ErrorsInterface } from './type/global.interface';


const globalState:GlobalInterface = {
    isLoader:false,
    isSuccess:false,
    errors:null,
    user:null,
    managers:null,
    students:null
}

export  const globalReducers = createReducer(
    // ------------  REGISTER --------------------
    globalState,
    on(registerStart,(state:GlobalInterface)=>({...state,isLoader:true,errors:null})),
    on(registerSuccess,(state:GlobalInterface)=>({...state,isLoader:false,isSuccess:true})),
    on(registerError,(state:GlobalInterface,action)=>({...state,isLoader:false,isSuccess:false,errors:action})),
    
    // -------------- PROFILE ----------------------------
    on(profileStart,(state:GlobalInterface)=>({...state})),
    on(profileSuccess,(state:GlobalInterface,action)=>({...state,isLoader:false,user:action})),
    on(profileError,(state:GlobalInterface)=>({...state,isLoader:false,isSuccess:false,})),

    // ------------  MANAGER ---------------------
    on(managerStart,(state:GlobalInterface)=>({...state})),
    on(managerSuccess,(state:GlobalInterface,action)=>({...state,managers:action.managers})),
    on(managerError,(state:GlobalInterface)=>({...state})),

    // -------- STUDENTS -----------------------
    on(studentsStart,(state:GlobalInterface)=>({...state})),
    on(studentsSuccess,(state:GlobalInterface,action)=>({...state,students:action.students})),
    on(studentsError,(state:GlobalInterface)=>({...state})),

)



