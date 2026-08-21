

export interface Iblog{
    id: number;
    userId: number;
    title: string;
    body: string;
}


export interface Istudent{
    studentname:string;
    course: string;
    number: string;
    rollno: string;
}

export interface Icard {
 title: string;
 body: string;
 id:string
}

export interface Ires{
    msg:string;
    data:Icard
}