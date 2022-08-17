export interface IPost{ 
    username: string,
    image: string,
    title: string,
    amountVotes: number,
    date_time: string,
    comments: IComments[]
}

export interface IComments{
    comment: string,
    author: string,
    amountVotes: number,
    date_time: string,
    amountComments: number
}