import { routerMiddleware } from 'connected-react-router'
import { createBrowserHistory, History } from 'history'
import { applyMiddleware, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { createEpicMiddleware } from 'redux-observable'
import { ajax } from 'rxjs/ajax'

import rootEpics from '../epics/root-epics'
import createRootReducer, { IRootState } from '../reducers/root-reducers'

export const history: History<any> = createBrowserHistory()
const epicMiddleware = createEpicMiddleware({
  dependencies: {
    getJson: ajax.getJSON,
  },
})

export default function configureStore(preloadedState: Partial<IRootState>) {
  const enhancers = composeWithDevTools(
    applyMiddleware(
      // logger,
      routerMiddleware(history), // for dispatching history actions
      epicMiddleware,
      // ... other middlewares ...
    ),
  )
  const store = createStore(
    createRootReducer(history), // root reducer with router state
    preloadedState,
    enhancers,
  )

  epicMiddleware.run(rootEpics)
  return store

}
