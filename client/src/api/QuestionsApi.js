import axios from "axios";

export const QuestionsApi = {
  getQuestions() {
    return axios({
      url: `http://localhost:5000/questions`,
      method: 'get',
      withCredentials: true
    })
      .then(response => {
        return response.data;
      })
  }
}