// axios文档地址: https://www.kancloud.cn/yunye/axios/234845
import axios from 'axios';
import {
  Message
} from 'element-ui'

// 创建axios实例
const service = axios.create({
  baseURL: process.env.BASE_API, // api的base_url
  timeout: 5000 // 请求超时时间
})
