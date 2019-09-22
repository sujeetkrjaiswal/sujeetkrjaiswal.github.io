import { handleActions } from 'redux-actions'
import { Type } from '../actions/theme.actions'
import { EnumDirValues } from '../interfaces/toggleDir.model'

export interface IThemeState {
  dir: EnumDirValues
}
const initialState: IThemeState = {
  dir: EnumDirValues.RTL,
}

export default handleActions<IThemeState>(
  {
    [Type.SET_DIR_LTR]: (state) => ({ ...state, dir: EnumDirValues.LTR }),
    [Type.SET_DIR_RTL]: (state) => ({ ...state, dir: EnumDirValues.RTL }),
  }, initialState)
