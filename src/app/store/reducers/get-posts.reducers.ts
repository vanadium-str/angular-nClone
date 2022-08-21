import { setPosts, GetPostsActions } from "../actions/get-posts.actions";
import { initialStatePosts, IPostState } from "../state/posts.state";

export type Action = GetPostsActions;

export const getPostsReducer = (state = initialStatePosts, action: Action): IPostState => {
    switch(action.type){
        case setPosts: {
            return {
                ...state,
                posts: action.payload
            }
        }
        default:
            return state;
    }
}