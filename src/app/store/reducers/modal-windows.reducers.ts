import * as ModalWindowsActions from "../actions/modal-windows.actions";
import { initialStateVisibility, IVisibilityWindow } from "../state/visibility-windows.state";

export type Action = ModalWindowsActions.ModalWindowsActions;

export const visibilityReducer = (state = initialStateVisibility, action: Action): IVisibilityWindow => {
    switch(action.type){
        case ModalWindowsActions.addComment: {
            return {
                ...state,
                showAddComment: !state.showAddComment
            }
        }
        case ModalWindowsActions.showPost: {
            return {
                ...state,
                showPost: !state.showPost
            }
        }
        case ModalWindowsActions.addPost: {
            return {
                ...state,
                addPost: !state.addPost
            }
        }
        default:
            return state;
    }
}