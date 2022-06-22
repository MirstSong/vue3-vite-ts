
// 后端统一返回数据模型
export type TResponseData<T> = {
    ResCode: 0 | number // 0 => ok
    IsCompress: boolean
    IsSuccess:boolean
    ResMsg: string
    ResData: T
  }
