import { combineEpics, Epic } from 'redux-observable'
import profileEpic from './profile.epic'
import themeEpic from './theme.epic'
// type InputActions = Action<any>
// type OutputActions = Action<any>
// type State = IRootState
// interface IDependencies {
//   getJson: <T>(url: string, headers?: object | undefined) => Observable<T>
// }
// export type TypeRootEpic = Epic<InputActions, OutputActions, State, IDependencies>

const rootEpic: Epic = combineEpics(
  themeEpic,
  profileEpic,
)
export default rootEpic
