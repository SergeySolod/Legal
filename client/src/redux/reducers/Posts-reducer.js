import { PostsApi } from "../../api/PostsApi";

export const SET_POSTS = "LegalQuestions/Posts-reducer/SET_POSTS";
export const SET_POST = "LegalQuestions/Posts-reducer/SET_POST";
export const SET_ALL_POSTS = "LegalQuestions/Posts-reducer/SET_ALL_POSTS";

let initialState = {
  posts: [],
  allposts: [],
  post: {},
};

const PostsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_POSTS:
      return {
        ...state,
        posts: [...action.posts],
      };
    case SET_ALL_POSTS:
      return {
        ...state,
        allposts: [...action.allposts],
      };
    case SET_POST:
      return {
        ...state,
        post: action.post,
      };
    default:
      return state;
  }
};

const setPosts = (posts) => ({
  type: SET_POSTS,
  posts,
});

const setALlPosts = (allposts) => ({
  type: SET_ALL_POSTS,
  allposts,
});

const setPost = (post) => ({
  type: SET_POST,
  post,
});

export const setPostsThunk = () => async (dispatch, getState) => {
  let data = await PostsApi.getPosts(getState().auth.token);
  dispatch(setPosts(data));
};

export const setAllPostsThunk = () => async (dispatch, getState) => {
  let data = await PostsApi.getPostsAll();
  dispatch(setALlPosts(data));
};

export const setPostThunk = (id) => async (dispatch, getState) => {
  let data = await PostsApi.getPost(id, getState().auth.token);
  dispatch(setPost(data));
};

export const postPostThunk = (formData) => async (dispatch, getState) => {
  let data = await PostsApi.postPost(formData, getState().auth.token);
};

export const putPostThunk = (formData) => async (dispatch, getState) => {
  let data = await PostsApi.putPost(
    getState().posts.post._id,
    formData,
    getState().auth.token
  );
};

export const deletePostThunk = () => async (dispatch, getState) => {
  let data = await PostsApi.deletePost(
    getState().posts.post._id,
    getState().auth.token
  );
  console.log(data);
};

export default PostsReducer;
