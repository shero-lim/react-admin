import { message } from "antd";
import axios from "axios";
import "../mock"

export default function ajax(url, data = {}, type = "GET") {
  return new Promise((resolve, reject) => {
    let promise;
    if (type === "GET") {
      //发GET请求
      promise = axios.get(url, {
        params: data,
      });
    } else {
      promise = axios.post(url, data);
    }

    promise
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        message.error("请求出错了： " + err.message);
      });
  });
}
