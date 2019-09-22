import { createAction } from 'redux-actions'

export const Type = {
  SET_DIR_LTR: 'SET_DIR_LTR',
  SET_DIR_RTL: 'SET_DIR_RTL',
  TOGGLE_DIR: 'TOGGLE_DIR',
}

export const themeToggleDir = createAction(Type.TOGGLE_DIR)
export const themeSetDirLtr = createAction(Type.SET_DIR_LTR)
export const themeSetDirRtl = createAction(Type.SET_DIR_RTL)
