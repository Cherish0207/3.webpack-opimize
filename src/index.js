// import jquery from "jquery";
import moment from "moment";
import "moment/locale/zh-cn";
// console.log(moment().format("MMMM Do YYYY, h:mm:ss a")); // August 13th 2021, 3:43:08 pm
moment.locale("zh-cn");
console.log(moment().format("MMMM Do YYYY, h:mm:ss a")); // 八月 13日 2021, 3:44:05 下午
