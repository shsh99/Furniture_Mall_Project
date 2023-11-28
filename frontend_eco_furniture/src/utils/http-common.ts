import axios from "axios";

// baseURL: "http://스프링ip주소:스프링포트번호/공통url"
export default axios.create({
  baseURL: "http://localhost:8000/api",
  headers: {
    "Content-Type": "application/json"
  }
});
