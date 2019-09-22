import { Action, handleActions } from 'redux-actions'
import { Type } from '../actions/profile.actions'
import { IProfileData } from '../interfaces/profile.model'

export enum EnumProfileDataStatus {
  NOT_INITIALIZED = 'NOT_INITIALIZED',
  FETCHED = 'FETCHED',
  FETCHING = 'FETCHING',
  ERROR = 'ERROR',
}

export interface IProfileState {
  status: EnumProfileDataStatus,
  data?: IProfileData | null,
  error?: any
}

const initialState: IProfileState = {
  status: EnumProfileDataStatus.NOT_INITIALIZED,
}

export default handleActions<IProfileState, any>({
  [Type.FETCH_PROFILE_DATA]: (state) => ({
    ...state,
    status: EnumProfileDataStatus.FETCHING,
  }),
  [Type.ERROR_FETCHING_PROFILE]: (state, { payload }: Action<any>) => ({
    ...state,
    data: null,
    error: payload,
    status: EnumProfileDataStatus.ERROR,
  }),
  [Type.SET_PROFILE_DATA]: (state, { payload }: Action<IProfileData>) => ({
    ...state,
    data: payload,
    error: null,
    status: EnumProfileDataStatus.FETCHED,
  }),
}, initialState)
