import axios from "axios";

export const CustomersApi = {
  getCustomers() {
    return axios({
      url: `http://localhost:5000/customers`,
      method: 'get'
    })
      .then(response => {
        return response.data;
      })
  }
}