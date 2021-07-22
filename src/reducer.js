export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null
  
}

const reducer = (state, action) => {
  console.log("action", action);

  switch (action.type) {
    case 'SET_USER':
        return {
            ...state,
            user: action.user
        }
        
        case "SET_PLAYLISTS":
            return{
                ...state,
                playlists: action.playlists,
            }
        default:
          return state;
  }
}

export default reducer;
