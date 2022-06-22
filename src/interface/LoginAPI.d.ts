
declare namespace LOGIN_API {
    /**
   * 参数
   * @param userName 用户名称 
   * @param Token token 
   * @returns
   */
    interface User {
        UserID:          number;
        UserNo:          string;
        UserName:        string;
        OrgID:           number;
        OrgName:         null;
        Token:           string;
        AccNo:           null;
        LangID:          number;
        Lang:            null;
        VerifyCode:      string;
        TType:           number;
        LastRequestTime: Date;
        ExpireTime:      Date;
        LoginTime:       Date;
        RouterMap:       null;
    }
}


declare namespace LOGIN_VIEW {
    /**
     * 账号密码
     */
    
    interface UserType  {
        uNo: string,
        uPW: string
    }

}