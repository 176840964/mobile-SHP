// axios二次封装
import axios from "axios";
// 引入进度条
import nprogress from "nprogress";
// 进度条样式（不引用看不到进度条）
import "nprogress/nprogress.css"

const requests = axios.create({
    // 基础路径，发请求的时候，路径当中会出现api
    baseURL: "/api",
    // 超时时间5s
    timeout: 5000 
});

// 请求拦截器
requests.interceptors.request.use((config) => {
    // config：配置对象，对象里面有一个属性很重要，header请求头
    // 进度条开始
    nprogress.start();
    return config;
})

// 响应拦截器
requests.interceptors.response.use((res) => {
    // 成功回调
    // 进度条完成
    nprogress.done();
    return res.data;
}, (error) => {
    // 失败回调
    return Promise.reject(new Error('faile'));
})

// 对外暴露
export default requests