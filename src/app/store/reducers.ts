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
    studentsError, 
    teachersStart,
    teachersSuccess,
    teachersError} from './action';
import { GlobalInterface,ErrorsInterface } from './type/global.interface';


const globalState:GlobalInterface = {
    isSuccess:null,
    errors:null,
    user:null,
    managers:null,
    students:null,
    teachers:null,
   
}

export  const globalReducers = createReducer(
    // ------------  REGISTER --------------------
    globalState,
    on(registerStart,(state:GlobalInterface)=>({...state,isSuccess:null})),
    on(registerSuccess,(state:GlobalInterface)=>({...state,isSuccess:true})),
    on(registerError,(state:GlobalInterface,action)=>({...state,isSuccess:false,errors:action})),
    
    // -------------- PROFILE ----------------------------
    on(profileStart,(state:GlobalInterface)=>({...state})),
    on(profileSuccess,(state:GlobalInterface,action)=>({...state,user:action})),
    on(profileError,(state:GlobalInterface)=>({...state,isSuccess:false,})),

    // ------------  MANAGER ---------------------
    on(managerStart,(state:GlobalInterface)=>({...state})),
    on(managerSuccess,(state:GlobalInterface,action)=>({...state,managers:action.managers})),
    on(managerError,(state:GlobalInterface)=>({...state})),

    // -------- STUDENTS -----------------------
    on(studentsStart,(state:GlobalInterface)=>({...state})),
    on(studentsSuccess,(state:GlobalInterface,action)=>({...state,students:action.students})),
    on(studentsError,(state:GlobalInterface)=>({...state})),
    
    // -------- TEACHERS -----------------------
    on(teachersStart,(state:GlobalInterface)=>({...state})),
    on(teachersSuccess,(state:GlobalInterface,action)=>({...state,teachers:action.teachers})),
    on(teachersError,(state:GlobalInterface)=>({...state})),


)



