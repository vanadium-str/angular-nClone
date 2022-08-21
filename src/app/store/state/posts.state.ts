import { IPost } from "src/app/models/post"

export interface IPostState {
    posts: IPost[]
}

export const initialStatePosts: IPostState = { 
    posts: []
}