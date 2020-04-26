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
    }
}