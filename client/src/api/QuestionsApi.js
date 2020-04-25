import axios from "axios";

export const QuestionsApi = {
    getQuestions() {
        return axios({
            url: `http://localhost:5000/questions`,
            method: 'get'
        })
            .then(response => {
                return response.data;
            })
    },
    postQuestions() {
        return axios({
            url: `http://localhost:5000/questions`,
            method: 'post',
            body: JSON.stringify(body),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => {
                return response.data;
            })
    }
}