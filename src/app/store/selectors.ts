import { createSelector, createFeatureSelector } from '@ngrx/store';
import { GlobalInterface } from './type/global.interface';

// ----------- REGISTER ---------------------
const registerFeature = createFeatureSelector<GlobalInterface>('register');
export const isSuccess = createSelector(registerFeature,(state:GlobalInterface)=>state.isSuccess);
export const errors = createSelector(registerFeature,(state:GlobalInterface)=>state.errors);
//  ---------- PROFILE -------------------------
export const user = createSelector(registerFeature,(state:GlobalInterface)=>state.user);
// -------------- MANAGER -------------------
export const manager = createSelector(registerFeature,(state:GlobalInterface)=>state.managers);
// ------------ STUDENTS ---------------
export const students = createSelector(registerFeature,(state:GlobalInterface)=>state.students);
// ------------ TEACHERS ---------------
export const teachers = createSelector(registerFeature,(state:GlobalInterface)=>state.teachers);
// --------------- ALLCOURSE ------------------------
export const courses = createSelector(registerFeature,(state:GlobalInterface)=>state.allCours);
// --------------- Module ------------------------
export const modules = createSelector(registerFeature,(state:GlobalInterface)=>state.module)
// --------------- GROUPS ------------------------
export const groups = createSelector(registerFeature,(state:GlobalInterface)=>state.groups)

