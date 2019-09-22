import { Action } from 'redux-actions'
import { Epic, ofType } from 'redux-observable'
import { Observable, of } from 'rxjs'
import { catchError, concatMap, map } from 'rxjs/operators'
import { setErrorInProfileFetch, setProfileData, Type } from '../actions/profile.actions'
import { IProfileData } from '../interfaces/profile.model'
import { IRootState } from '../reducers/root-reducers'

type InputActions = Action<any>
type OutputActions = Action<any>
type State = IRootState
interface IDependencies {
  getJson: <T>(url: string) => Observable<T>
}
type typeProfileEpic = Epic<InputActions, OutputActions, State, IDependencies>

const profileEpic: typeProfileEpic = (action$, _, { getJson }) => action$.pipe(
  ofType(Type.FETCH_PROFILE_DATA),
  concatMap(() => getJson<IProfileData>(`/data.json`)),
  map((payload) => setProfileData(payload)),
  catchError((err) => of(setErrorInProfileFetch(err))),
)

export default profileEpic
