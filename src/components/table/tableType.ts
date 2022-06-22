
 interface BsName {
    title?: string;
    width?: number;
}
export interface ITABLE {
    [key: string]: BsName;
}

export interface Welcome {
    dataKey?: string;
    key?:     string;
    title?:   string;
    width?:   number;
    cellRenderer?:any;
}


export  interface Datum {
    [key: string]: any;

}


interface Police {
    title: string;
    width?:string;
    ClickGrid?:(row : Datum)=>{
    };
    setTemplay?:(row : Datum)=>void ;
    soltTitle?:string;
    HTMLX?:(row : Datum)=>void
}
type fun = (row : Datum)=> void;


export interface COLUMNS {
    [key: string]: Police | fun | boolean;
}

export type PropsType =  {
    [TABLE_COLUMNS:string] :any;
}

type Person = {
    name: string;
    age: number;
    id: number;
    sex: 0 | 1;
  }

export interface  PageType {
    pageIndex:number
    pageSize:number
    [key: string]: any;
}

//  type Woman = Pick<Person, "name" | "id" | "sex">;


//  interface User {
//     id: number;
//     name: string;
//     age: number;
//     sex: 0 | 1;
//     tel: number;
//   }
  
//   type EditUser = Omit<User, "id" | "age">; 

