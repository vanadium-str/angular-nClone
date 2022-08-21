import { Action } from "@ngrx/store";
import { IPost } from "../../models/post";

export const setPosts = '[POSTS] Set posts data';
export const getPosts = '[POSTS] Get posts data';

export const POSTS_KEY = 'posts';

export class GetPosts implements Action {
    readonly type = getPosts;
}

export class SetPosts implements Action {
    readonly type = setPosts;

    constructor( public payload: IPost[] ){}
}

export type GetPostsActions = GetPosts | SetPosts;