import { connectRouter, RouterState } from 'connected-react-router'
import { History } from 'history'
import { combineReducers } from 'redux'

import navBarReducer, { INavBarState } from './navBar.reducer'
import profileReducer, { IProfileState } from './profile.reducer'
import themeReducer, { IThemeState } from './theme.reducer'

interface IStoreEnhancerState {
  router: RouterState
}

export interface IRootState extends IStoreEnhancerState {
  theme: IThemeState
  profile: IProfileState
  navBar: INavBarState
}

export default (history: History<any>) => combineReducers<IRootState>({
  navBar: navBarReducer,
  profile: profileReducer,
  router: connectRouter(history),
  theme: themeReducer,
})
