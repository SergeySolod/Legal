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
    postQuestions(body = null) {
        if (body) {
            body = JSON.stringify(body)
        }
        return axios({
            url: `/api/questions/generate`,
            method: 'post',
            body: body,
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => {
                return response.data;
            })
    }
}