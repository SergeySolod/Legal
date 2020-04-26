import axios from "axios";

export const PostsApi = {
    getPosts() {
        return axios({
            url: `/api/posts`,
            method: 'get'
        })
            .then(response => {
                return response.data;
            })
    },
    getPost(id) {
        return axios({
            url: `/api/posts/${id}`,
            method: 'get'
        })
            .then(response => {
                return response.data;
            })
    },
    postPosts(formData) {
        formData = JSON.stringify(formData)
        return axios({
            url: `/api/posts/generate`,
            method: 'post',
            data: formData,
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => {
                return response.data;
            })
    }
}