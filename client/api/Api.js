import * as axios from 'axios'

export const foodleAPI = {
    getCities() {
        return axios({
            url: 'http://www.mocky.io/v2/5df7e285320000ef612e02ae',
            method: 'get',
        }).then(response => {
            return response.data;
        });
    },
}