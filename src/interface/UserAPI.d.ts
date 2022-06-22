/**
 * @Description: 用户信息页面查询表单
 * @Author: CZW
 */

declare namespace USER_API {
    /**
    * @description  用户信息页面查询表单
    * @param user  用户名
    * @param page  当前页
    * @param pageSize  页码
    * @param total  总数
    * @returns
    */
    interface FormInline {
        user: string;
        page: number;
        pageSize: number;
        total: number;
    }

    /**
    * @description  用户弹框表单
    * @param userId  用户ID
    * @param userName  用户名
    * @param account  账号
    * @param passWork  密码
    */
    interface UserForm {
        userId?: string;
        userName: string;
        account: string;
        passWork: string;
    }
}