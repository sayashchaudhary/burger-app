import axios from "axios";

const instance = axios.create({
    baseURL: 'https://react-burger-app-d2063.firebaseio.com/'
});

export default instance;
