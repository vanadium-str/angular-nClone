import { initialStateUser, IUser } from "../state/user.state";
import { setUsername, UsernameActions } from "../actions/username.actions";

export type Action = UsernameActions;

export const changeUsernameReducer = (state = initialStateUser, action: Action): IUser => {
    switch(action.type){
        case setUsername: {
            return {
                ...state,
                username: action.payload
            }
        }
        default:
            return state;
    }
}