import axios from "axios";

const instance = axios.create({
  baseURL: "https://chat-7b8ab.firebaseio.com/"
});

export default instance;
