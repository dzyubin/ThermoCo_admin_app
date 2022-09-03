import { createGlobalState } from 'react-hooks-global-state'

const initialState = {
  isLoggedIn: false,
  user: {},
  token: null
}

const { useGlobalState } = createGlobalState(initialState)

export default useGlobalState
