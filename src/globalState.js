/**
 * Using react-hooks-global-state for global state handling
 * With complex app redux or other state management tool is more appropriate
 */
import { createGlobalState } from 'react-hooks-global-state'

const initialState = {
  isLoggedIn: false,
  user: {},
  token: null
}

const { useGlobalState } = createGlobalState(initialState)

export default useGlobalState
