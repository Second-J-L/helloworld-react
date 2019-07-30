/**
 * @desc http请求客户端
 * @author 
 * @created 2019-07-30 
 */

import axios from 'axios';
import { apiBaseUrl } from './http-config'

const urlMap = {
  getList: apiBaseUrl + '/list1/?tag=__all__&ac=wap&count=20&format=json_raw&as=A1E50A442CBAAEF&cp=5A4C8A0A5EEFDE1&min_behot_time=0'
};

const HttpClient = {
  getList: (options) => {
    axios
      .get(urlMap.getList, {params: options.params})
        .then(function (response) { options.callback && options.callback(response); })
        .catch(function (error) { options.failcallback && options.failcallback(error); })
        .then(function () { });  
  }
};

export default HttpClient;
