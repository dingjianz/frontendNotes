import Vue from "vue"
import moment from "moment"

export const dataFormat = Vue.filter("dateFormat",(dataStr,pattern= "YYYY-MM-DD HH:MM:SS")=>{
    // 利用 Node.js 中的moment插件
    return moment(dataStr).format(pattern)
})


