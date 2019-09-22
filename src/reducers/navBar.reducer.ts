import { handleActions } from 'redux-actions'
import { Type } from '../actions/navBar.actions'

export interface INavBarState {
  isOpen: boolean
}

const initialState: INavBarState = {
  isOpen: false,
}

export default handleActions<INavBarState>({
  [Type.NAV_BAR_CLOSED]: (state) => ({ ...state, isOpen: false }),
  [Type.NAV_BAR_OPENED]: (state) => ({ ...state, isOpen: true }),
  [Type.TOGGLE_NAV_BAR]: (state) => ({ ...state, isOpen: !state.isOpen }),
}, initialState)
