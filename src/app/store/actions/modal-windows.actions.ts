import { Action } from "@ngrx/store";

export const addComment = '[VISIBILITY] Add comment';
export const showPost = '[VISIBILITY] Show post';
export const addPost = '[VISIBILITY] Show add post page';

export const VISIBILITY_KEY = 'visibility';

export class AddComment implements Action {
    readonly type = addComment;
}

export class ShowPost implements Action {
    readonly type = showPost;
}

export class AddPost implements Action {
    readonly type = addPost;
}

export type ModalWindowsActions = AddComment | ShowPost | AddPost;