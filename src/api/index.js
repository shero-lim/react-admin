import { message } from "antd";
import ajax from "./ajax";
import jsonp from "jsonp";

//登录
export const reqLogin = (username, password) =>
  ajax("/login", { username, password }, "POST");

//添加用户
export const reqAddUser = (user) => ajax("/manage/user/add", user, "POST");

//获取一级/二级分类的列表
export const reqCategories = (parentId) =>
  ajax("/manage/category/list", { parentId });

//添加分类
export const reqAddCategory = (parentId, categoryName) =>
  ajax("/manage/category/add", { parentId, categoryName }, "POST");

export const reqUpdateCategory = ({categoryId, categoryName}) => ajax("/manage/category/update", { categoryId, categoryName }, "POST");
/**
 * jsonp请求的接口请求函数
 */
export const reqWeather = (city) => {
  return new Promise((resolve, reject) => {
    const url = `http://api.map.baidu.com/telematics/v3/weather?location=${city}&output=json&ak=3p49MVra6urFRGOT9s8UBWr2`;
    jsonp(url, {}, (err, data) => {
      if (!err && data.status === "success") {
        const { dayPictureUrl, weather } = data.results[0].weather_data[0];
        resolve({ dayPictureUrl, weather });
      } else {
        message.error("获取天气信息失败！");
      }
    });
  });
};
