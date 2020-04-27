import axios from "axios";

export const PostsApi = {
  getPosts(token) {
    return axios({
      url: `/api/posts/my`,
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
      url: `/api/posts/my/${id}`,
      method: "get",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((response) => {
      return response.data;
    });
  },
  getPostsAll(token) {
    return axios({
      url: `/api/posts/all`,
      method: "get",
    }).then((response) => {
      return response.data;
    });
  },
  getPostAll(id, token) {
    return axios({
      url: `/api/posts/all/${id}`,
      method: "get",
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
