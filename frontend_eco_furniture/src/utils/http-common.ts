import axios from "axios";

export default axios.create({
  baseURL: "http://54.180.97.141:8000/api",
  headers: {
    "Content-Type": "application/json"
  }
});
