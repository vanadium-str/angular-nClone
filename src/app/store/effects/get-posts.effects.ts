import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { of, switchMap } from "rxjs";
import { IPost } from "src/app/models/post";
import { PostServise } from "../../services/posts.service";
import { getPosts, GetPosts, SetPosts } from "../actions/get-posts.actions";

@Injectable()
export class GetPostsEffects {
    constructor(
       private actions$: Actions,
       private postsService: PostServise,
       private store: Store
    ){}

    getPosts$ = createEffect(() => this.actions$.pipe(
        ofType<GetPosts>(getPosts),
        switchMap(() => this.postsService.getData()),
        switchMap((posts: IPost[]) => of(new SetPosts(posts)))
    ))
}