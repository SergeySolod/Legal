import axios from "axios";

export const QuestionsApi = {
    getQuestions() {
        return axios({
            url: `/api/questions`,
            method: 'get'
        })
            .then(response => {
                return response.data;
            })
    },
    getQuestion(id) {
        return axios({
            url: `/api/questions/${id}`,
            method: 'get'
        })
            .then(response => {
                return response.data;
            })
    },
    postQuestions(formData) {
        formData = JSON.stringify(formData)
        return axios({
            url: `/api/questions/generate`,
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