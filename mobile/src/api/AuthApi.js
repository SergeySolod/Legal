import axios from "axios";

export const AuthApi = {
  login(formData) {
    formData = JSON.stringify(formData);
    return axios({
      url: `/api/auth/login`,
      method: "post",
      data: formData,
      headers: {
        "Content-Type": "application/json",
      },
    }).then((response) => {
      return response.data;
    });
  },
  register(formData) {
    formData = JSON.stringify(formData);
    return axios({
      url: `/api/auth/register`,
      method: "post",
      data: formData,
      headers: {
        "Content-Type": "application/json",
      },
    }).then((response) => {
      return response.data;
    });
  },
};
