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
  getPostsAll() {
    return axios({
      url: `/api/posts/all`,
      method: "get",
    }).then((response) => {
      return response.data;
    });
  },
  postPost(formData, token) {
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
  putPost(id, formData, token) {
    formData = JSON.stringify(formData);
    return axios({
      url: `/api/posts/change/${id}`,
      method: "put",
      data: formData,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }).then((response) => {
      return response.data;
    });
  },
  deletePost(id, token) {
    return axios({
      url: `/api/posts/delete/${id}`,
      method: "delete",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((response) => {
      return response.data;
    });
  },
};
