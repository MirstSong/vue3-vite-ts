import { ElMessage } from 'element-plus';
enum Flage{
    success,
    error,
    warning,
}

export default {
    $Message:(message:string,Key:number  = 0 )=>{
        if(Key === -1) Key = 1;
        let type:any =  Flage[Key] 
        ElMessage({
            message,
            type,
        })
    }
}