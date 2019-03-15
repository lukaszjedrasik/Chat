import axios from "axios";

const instance = axios.create({
  baseURL: "https://chat-9a83e.firebaseio.com/"
});

export default instance;
