import { Action } from 'redux-actions'
import { Epic, ofType } from 'redux-observable'
import { map, withLatestFrom } from 'rxjs/operators'
import { themeSetDirLtr, themeSetDirRtl, Type } from '../actions/theme.actions'
import { EnumDirValues } from '../interfaces/toggleDir.model'
import { IRootState } from '../reducers/root-reducers'

type InputActions = Action<any>
type OutputActions = Action<any>
type State = IRootState

type toggleDirEpic = Epic<InputActions, OutputActions, State>

const themeEpic: toggleDirEpic = (action$, state$) => action$.pipe(
  ofType(Type.TOGGLE_DIR),
  withLatestFrom(state$),
  // delay(1000),
  map(([, state]) => {
    return state.theme.dir === EnumDirValues.RTL ? themeSetDirLtr() : themeSetDirRtl()
  }),
)

export default themeEpic
