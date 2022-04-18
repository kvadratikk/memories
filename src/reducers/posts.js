import {
  CREATE,
  UPDATE,
  FETCH_ALL,
  FETCH_POST,
  FETCH_BY_SEARCH,
  DELETE,
  LIKE,
  START_LOADING,
  END_LOADING,
  COMMENT,
  DELETE_COMMENT,
} from '../constants/actionTypes';

const update = (
  state = {
    isLoading: true,
    posts: [],
    currentPage: 1,
    numberOfPages: 1,
    post: '',
  },
  action
) => {
  switch (action.type) {
    case START_LOADING:
      return { ...state, isLoading: true };
    case END_LOADING:
      return { ...state, isLoading: false };
    case FETCH_ALL:
      return {
        ...state,
        posts: action.payload.data,
        currentPage: action.payload.currentPage,
        numberOfPages: action.payload.numberOfPages,
        post: '',
      };
    case FETCH_BY_SEARCH:
      return { ...state, posts: action.payload };
    case FETCH_POST:
      return { ...state, post: action.payload };
    case CREATE:
      return { ...state, posts: [...state.posts, action.payload] };
    case UPDATE:
    case LIKE:
      return {
        ...state,
        posts: state.posts.map((post) =>
          post._id === action.payload._id ? action.payload : post
        ),
      };
    case COMMENT:
      return {
        ...state,
        posts: state.posts.map((post) => {
          if (post._id === action.payload._id) {
            return action.payload;
          }

          return post;
        }),
      };
    case DELETE_COMMENT:
      return {
        ...state,
        posts: state.posts.map((post) => {
          if (post._id === state.post._id) {
            post.comments = action.payload;
          }

          return post;
        }),
      };
    case DELETE:
      return {
        ...state,
        posts: state.posts.filter((post) => post._id !== action.payload),
      };
    default:
      return state;
  }
};

export default update;
