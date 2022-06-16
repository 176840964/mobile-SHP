import requests from "./ajax";
import mockRequests from "./mockAjax"

// 3. 首页三级分类
export const reqCategoryList = ()=> requests({url:'/product/getBaseCategoryList', method:'get'})

// 获取banner
export const reqGetBannerList = ()=> mockRequests.get('/banner')

// 获取floor
export const reqGetFloorList = ()=>mockRequests.get('/floor')