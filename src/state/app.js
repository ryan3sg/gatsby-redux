// Initial State
const initialState = {
  isDarkMode: false,
}

// Action Creator
const TOGGLE_DARKMODE = "TOGGLE_DARKMODE"

export const toggleDarkMode = isDarkMode => ({
  type: TOGGLE_DARKMODE,
  isDarkMode,
})

// Reducer
export default (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_DARKMODE:
      return { ...state, isDarkMode: action.isDarkMode }
    default:
      return state
  }
}
