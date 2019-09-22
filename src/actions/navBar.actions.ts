import { createAction } from 'redux-actions'

export const Type = {
  NAV_BAR_CLOSED: 'NAV_BAR_CLOSED',
  NAV_BAR_OPENED: 'NAV_BAR_OPENED',
  TOGGLE_NAV_BAR: 'TOGGLE_NAV_BAR',
}

export const toggleNavBar = createAction(Type.TOGGLE_NAV_BAR)
export const NavBarClosed = createAction(Type.NAV_BAR_CLOSED)
export const NavBarOpened = createAction(Type.NAV_BAR_OPENED)
