import axios from "axios";

export const PostsApi = {
  getPosts(token) {
    return axios({
      url: `/api/posts`,
      method: "get",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((response) => {
      return response.data;
    });
  },
  getPost(id, token) {
    return axios({
      url: `/api/posts/${id}`,
      method: "get",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((response) => {
      return response.data;
    });
  },
  postPosts(formData, token) {
    formData = JSON.stringify(formData);
    return axios({
      url: `/api/posts/generate`,
      method: "post",
      data: formData,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }).then((response) => {
      return response.data;
    });
  },
};