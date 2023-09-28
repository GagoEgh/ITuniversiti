import { createAction, props } from '@ngrx/store';
import { ManagerType, ProfileType, RegisterType, StudentsType, TeachersType } from './type/global.type';
import { IRegister } from '../core/model/register.interface';
import { ErrorsInterface, OKmsg } from './type/global.interface';
import { ProfileInterface } from '../dashboard/type/profile.interface';

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