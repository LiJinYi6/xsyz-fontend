export interface ResData{
    code: number,
    msg: string
}

export interface commentType{
    id: number,
    content: string,
    data:string,
    userId:number,
    create_time: string,
    name: string,
    imageUrl:string,
}
export interface commentListType{
    total: number,
    list: commentType[]
}


