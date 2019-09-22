import { createAction } from 'redux-actions'
import { IProfileData } from '../interfaces/profile.model'

export const Type = {
  ERROR_FETCHING_PROFILE: 'ERROR_FETCHING_PROFILE',
  FETCH_PROFILE_DATA: 'FETCH_PROFILE_DATA',
  SET_PROFILE_DATA: 'SET_PROFILE_DATA',
}

export const setErrorInProfileFetch = createAction<any>(Type.ERROR_FETCHING_PROFILE)
export const requestProfile = createAction(Type.FETCH_PROFILE_DATA)
export const setProfileData = createAction<IProfileData>(Type.SET_PROFILE_DATA)
