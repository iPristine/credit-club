import * as CP from "../constants/actions";

const initialState = {
  posts: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CP.ADD_POST:
      return { ...state, posts: [...state.posts, action.post] };
    default:
      return state;
  }
};
