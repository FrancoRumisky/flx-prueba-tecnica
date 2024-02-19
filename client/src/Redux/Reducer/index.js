const initialState = {
  users: [],
  usersRender:[],
  loading: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_USERS":
      return {
        ...state,
        users: action.payload,
        usersRender: action.payload,
        loading: false,
      };
      case "SEARCH_USERS":
      return {
        ...state,
        usersRender: action.payload,
        loading: false,
      };
      case "CREATE_USER":
      return {
        ...state,
        usersRender:[...state.usersRender, action.payload],
        loading: false,
      };
      case "UPDATE_USER":
      return {
        ...state,
        loading: false,
      };
      case "DELETE_USER":
      return {
        ...state,
        loading: false,
      };
      case "LOADING":
        return {
          ...state,
          loading: true
        }
    default:
      return state;
  }
};

export default reducer;
