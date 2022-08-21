import { createFeatureSelector, createSelector } from "@ngrx/store";
import { IUser } from "../state/user.state";
import { USERNAME_KEY } from "../actions/username.actions";

export const featureSelector = createFeatureSelector<IUser>(USERNAME_KEY);

export const setUsernameSelector = createSelector(
    featureSelector,
    state => state.username
)