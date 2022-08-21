import { createFeatureSelector, createSelector } from "@ngrx/store";
import { POSTS_KEY } from "../actions/get-posts.actions";
import { IPostState } from "../state/posts.state";

export const featureSelector = createFeatureSelector<IPostState>(POSTS_KEY);

export const getPostsSelector = createSelector(
    featureSelector,
    state => state.posts
)