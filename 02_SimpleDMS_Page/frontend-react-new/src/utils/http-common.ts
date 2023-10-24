import axios from "axios";

// TODO : baseURL : "http://스프링ip주소:스프링포트번호/공통url"
// react < - > springboot : json 객체(통신)
export default axios.create({
  baseURL: "http://localhost:8000/api",
  headers: {
    "Content-Type": "application/json"
  }
});