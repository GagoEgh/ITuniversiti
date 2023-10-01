import { createAction, props } from '@ngrx/store';
import { AllCourseType, CreateCourse, CreateGroupe, CreateModule, ManagerType, ModuleByCourseId, ProfileType, RegisterType, StudentsType, TeachersType, UpdateCourse, UpdateModuleNameAndCount } from './type/global.type';
import { IRegister } from '../core/model/register.interface';
import { ErrorsInterface, OKmsg } from './type/global.interface';
import { ProfileInterface } from '../dashboard/type/profile.interface';
import { CourseInterface } from './type/course.interface';
import { ModuleInterface } from './type/module.interface';
import { CreateCourseInterface } from './type/createCourse.interface';
import { CreateGroupInterface } from './type/createGroupe.interface';
import { CreateModuleInterface } from './type/createModule.interface';
import { AllGroupsInterface } from './type/allGroups.interface';

//        ----REGISTER-----
export const registerStart = createAction(RegisterType.REGISTER_START,props<IRegister>());
export const registerSuccess = createAction(RegisterType.REGISTER_SUCCESS,props<OKmsg>());
export const registerError = createAction(RegisterType.REGISTER_ERROR,props<ErrorsInterface>());

//  ------------ PROFILE -------------
export const profileStart = createAction(ProfileType.PROFILE_START);
export const profileSuccess = createAction(ProfileType.PROFILE_SUCCESS,props<ProfileInterface>());
export const profileError = createAction(ProfileType.PROFILE_ERROR);

//  ------------------ MANAGER -----------------------------
export const managerStart = createAction(ManagerType.MANAGER_START);
export const managerSuccess = createAction(ManagerType.MANAGER_SUCCESS,props<{managers:ProfileInterface[]}>());
export const managerError = createAction(ManagerType.MANAGER_ERROR);

// --------------------- STUDENTS ------------------------------
export const  studentsStart = createAction(StudentsType.STUDENTS_START);
export const studentsSuccess = createAction(StudentsType.STUDENTS_SUCCESS,props<{students:ProfileInterface[]}>());
export const studentsError = createAction(StudentsType.STUDENTS_ERROR);
// -------------------- TEACHERS ---------------------
export const teachersStart = createAction(TeachersType.TEACHERS_START);
export const teachersSuccess = createAction(TeachersType.TEACHERS_SUCCESS,props<{teachers:ProfileInterface[]}>());
export const teachersError = createAction(TeachersType.TEACHERS_ERROR);

// -------------------- ALLCOURSE ---------------------
export const allCourseStart = createAction(AllCourseType.ALL_COUESE_START);
export const allCourseSuccess = createAction(AllCourseType.ALL_COUESE_SUCCESS,props<{courses:CourseInterface[]}>());
export const allCourseError = createAction(AllCourseType.ALL_COUESE_ERROR);

// -------------------- ModuleByCourseId ---------------------
export const moduleByCourseIdStart = createAction(ModuleByCourseId.MODULEBYCOURSEID_START,props<{id:string}>());
export const moduleByCourseIdSuccess = createAction(ModuleByCourseId.MODULEBYCOURSEID_SUCCESS,props<{module:ModuleInterface[]}>());
export const moduleByCourseIdError = createAction(ModuleByCourseId.MODULEBYCOURSEID_ERROR);

// -------------------- createCourse ---------------------

export const createCourseStart = createAction(CreateCourse.CREATECOURSE_START,props<CreateCourseInterface >());
export const createCourseSuccess = createAction(CreateCourse.CREATECOURSE_SUCCESS,props<OKmsg>());
export const createCourseError = createAction(CreateCourse.CREATECOURSE_ERROR,props<ErrorsInterface>());

// -------------------- createGroupe ---------------------

export const createGroupStart = createAction(CreateGroupe.CREATEGROUP_START,props<CreateGroupInterface>());
export const createGroupSuccess = createAction(CreateGroupe.CREATEGROUP_SUCCESS,props<OKmsg>());
export const createGroupError = createAction(CreateGroupe.CREATEGROUP_ERROR,props<ErrorsInterface>());

// -------------------- createModule ---------------------

export const createModuleStart = createAction(CreateModule.CREATEMODULE_START,props<CreateModuleInterface>());
export const createModuleSuccess = createAction(CreateModule.CREATEMODULE_SUCCESS,props<OKmsg>());
export const createModuleError = createAction(CreateModule.CREATEMODULE_ERROR,props<ErrorsInterface>());

// -------------------- UPDATECOURSE ---------------------
export const updateCourseStart = createAction(UpdateCourse.UPDATECOURSE_START,props<CourseInterface>());
export const updateCourseSuccess = createAction(UpdateCourse.UPDATECOURSE_SUCCESS,props<OKmsg>());
export const updateCourseError = createAction(UpdateCourse.UPDATECOURSE_ERROR,props<ErrorsInterface>());

// -------------------- ALLGROUPS ---------------------
export const allGroupsStart = createAction(AllCourseType.ALL_COUESE_START);
export const allGroupsSuccess = createAction(AllCourseType.ALL_COUESE_SUCCESS,props<{groups:AllGroupsInterface[]}>());
export const allGroupsError = createAction(AllCourseType.ALL_COUESE_ERROR);

// -------------------------UpdateModuleNameAndCount -----------------------

export const UpdateModuleNameAndCountStart = createAction(UpdateModuleNameAndCount.UPDATEMODULENAMEANDCOUNT_START,props<{name:string,count:string}>());
export const UpdateModuleNameAndCountSuccess = createAction(UpdateModuleNameAndCount.UPDATEMODULENAMEANDCOUNT_SUCCESS,props<OKmsg>());
export const UpdateModuleNameAndCountError = createAction(UpdateModuleNameAndCount.UPDATEMODULENAMEANDCOUNT_ERROR,props<ErrorsInterface>());