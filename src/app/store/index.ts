import { ActionReducerMap } from "@ngrx/store";
import { POSTS_KEY } from "./actions/get-posts.actions";
import { getPostsReducer } from "./reducers/get-posts.reducers";
import { VISIBILITY_KEY } from "./actions/modal-windows.actions";
import { visibilityReducer } from "./reducers/modal-windows.reducers";
import { IPostState } from "./state/posts.state";
import { IUser } from "./state/user.state";
import { IVisibilityWindow } from "./state/visibility-windows.state";
import { USERNAME_KEY } from "./actions/username.actions";
import { changeUsernameReducer } from "./reducers/username.reducers";

export interface State {
    [VISIBILITY_KEY]: IVisibilityWindow,
    [USERNAME_KEY]: IUser,
    [POSTS_KEY]: IPostState
}

export const appReducers: ActionReducerMap<State, any> = {
    [VISIBILITY_KEY]: visibilityReducer,
    [USERNAME_KEY]: changeUsernameReducer,
    [POSTS_KEY]: getPostsReducer
}