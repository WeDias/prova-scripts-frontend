import axios from "axios";

const api = axios.create({
    baseURL: "https://wes-scripts-back.herokuapp.com/"
});

export default api;
