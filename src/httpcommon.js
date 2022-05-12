import axios from "axios";
export default axios.create({
  baseURL: "https://localhost:9001",
  headers: {
    "Content-type": "application/json"
  }
});