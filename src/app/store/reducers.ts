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
    teachersError,
    allCourseStart,
    allCourseSuccess,
    allCourseError,
    moduleByCourseIdStart,
    moduleByCourseIdSuccess,
    moduleByCourseIdError,
    createCourseStart,
    createCourseSuccess,
    createCourseError,
    createGroupStart,
    createGroupSuccess,
    createGroupError,
    createModuleStart,
    createModuleSuccess,
    createModuleError,
    updateCourseStart,
    updateCourseError,
    updateCourseSuccess,
    allGroupsStart,
    allGroupsSuccess,
    allGroupsError,
    UpdateModuleNameAndCountStart,
    UpdateModuleNameAndCountSuccess,
    UpdateModuleNameAndCountError} from './action';
import { GlobalInterface,ErrorsInterface } from './type/global.interface';


const globalState:GlobalInterface = {
    isSuccess:null,
    errors:null,
    user:null,
    managers:null,
    students:null,
    teachers:null,
    allCours:null,
    module:null,
    groups:null,
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

    // -------- COURSE -----------------------
    on(allCourseStart,(state:GlobalInterface)=>({...state})),
    on(allCourseSuccess,(state:GlobalInterface,action)=>({...state,allCours:action.courses})),
    on(allCourseError,(state:GlobalInterface)=>({...state})),

    
    // -------- ModuleByCourseId -----------------------
    on(moduleByCourseIdStart,(state:GlobalInterface)=>({...state})),
    on(moduleByCourseIdSuccess,(state:GlobalInterface,action)=>({...state,module:action.module})),
    on(moduleByCourseIdError,(state:GlobalInterface)=>({...state})),

    // ---------------CreateUser -----------
    on(createCourseStart,(state:GlobalInterface)=>({...state,isSuccess:null})),
    on(createCourseSuccess,(state:GlobalInterface)=>({...state,isSuccess:true})),
    on(createCourseError,(state:GlobalInterface,action)=>({...state,isSuccess:false,errors:action})),

    
    // ---------------CreateGroup -----------
    on(createGroupStart,(state:GlobalInterface)=>({...state,isSuccess:null})),
    on(createGroupSuccess,(state:GlobalInterface)=>({...state,isSuccess:true})),
    on(createGroupError,(state:GlobalInterface,action)=>({...state,isSuccess:false,errors:action})),

  // ---------------CreateModule -----------
  on(createModuleStart,(state:GlobalInterface)=>({...state,isSuccess:null})),
  on(createModuleSuccess,(state:GlobalInterface)=>({...state,isSuccess:true})),
  on(createModuleError,(state:GlobalInterface,action)=>({...state,isSuccess:false,errors:action})),

      // -------- UpdateCourse -----------------------
  on(updateCourseStart,(state:GlobalInterface)=>({...state,isSuccess:null})),
  on(updateCourseSuccess,(state:GlobalInterface)=>({...state,isSuccess:true})),
  on(updateCourseError,(state:GlobalInterface,action)=>({...state,isSuccess:false,errors:action})),

   // -------- AllGroups -----------------------
   on(allGroupsStart,(state:GlobalInterface)=>({...state})),
   on(allGroupsSuccess,(state:GlobalInterface,action)=>({...state,groups:action.groups})),
   on(allGroupsError,(state:GlobalInterface)=>({...state})),
   
   // -------------------- UpdateModuleNameAndCount ------------------
   on(UpdateModuleNameAndCountStart,(state:GlobalInterface)=>({...state,isSuccess:null})),
   on(UpdateModuleNameAndCountSuccess,(state:GlobalInterface)=>({...state,isSuccess:true})),
   on(UpdateModuleNameAndCountError,(state:GlobalInterface)=>({...state,isSuccess:false})),
)



