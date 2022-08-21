import { createFeatureSelector, createSelector } from "@ngrx/store";
import { VISIBILITY_KEY } from "../actions/modal-windows.actions";
import { IVisibilityWindow } from "../state/visibility-windows.state";

export const featureSelector = createFeatureSelector<IVisibilityWindow>(VISIBILITY_KEY);

export const showAddCommentSelector = createSelector(
    featureSelector,
    state => state.showAddComment
)
export const showPostSelector = createSelector(
    featureSelector,
    state => state.showPost
)
export const showAddPostSelector = createSelector(
    featureSelector,
    state => state.addPost
)