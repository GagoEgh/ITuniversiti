import { createSelector, createFeatureSelector } from '@ngrx/store';
import { IAuthState } from '../model/authState.interfact';

const authFeature = createFeatureSelector<IAuthState>('auth');

export const isLoad = createSelector(authFeature,(state:IAuthState)=>state.isLoad);
export const request = createSelector(authFeature,(state:IAuthState)=>state.request)
