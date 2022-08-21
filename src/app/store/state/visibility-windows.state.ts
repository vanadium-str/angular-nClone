export interface IVisibilityWindow {
    showAddComment: boolean,
    showPost: boolean,
    addPost: boolean
}

export const initialStateVisibility: IVisibilityWindow = {
    showAddComment: false,
    showPost: false,
    addPost: false
}