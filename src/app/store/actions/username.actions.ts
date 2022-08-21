import { Action } from "@ngrx/store";

export const setUsername = '[USERNAME] Set username';

export const USERNAME_KEY = 'username';

export class SetUsername implements Action {
    readonly type = setUsername;

    constructor( public payload: string ){}
}

export type UsernameActions = SetUsername;