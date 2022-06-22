
import http from '@/utlis/http';
import {PageType} from  './tableType';

class TableApi {
    /**
   * 
   * @param 
   * @param 
   * @returns
   */
  
 /**
  * @description 获取表格数据
  * @param {string} url
  * @param {PageType} params pageIndex pageSize 必传 页数  页码
  * @return {*} 
  * @memberof TableApi
  */
 GetData(url:string,params:PageType){
    return http.request({
      url:url,
      method:'GET',
      params,
    })
  }
}
const tableApi = new TableApi();

export default tableApi;