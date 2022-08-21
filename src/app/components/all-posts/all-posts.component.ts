import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { IPost } from "src/app/models/post";
import { PostServise } from "src/app/services/posts.service";
import { GetPosts } from "src/app/store/actions/get-posts.actions";
import { AddPost } from "src/app/store/actions/modal-windows.actions";
import { getPostsSelector } from "src/app/store/selectors/get-posts.selectors";
import { showAddPostSelector } from "src/app/store/selectors/modal-windows.selectors";

@Component({
    selector: 'all-posts',
    templateUrl: './all-posts.component.html',
    styleUrls: []
})

export class AllPostsComponent implements OnInit{

   // posts: IPost[];

    showAddPost$ = this.store.select(showAddPostSelector);

    showAddPost(){
        this.store.dispatch(new AddPost);
    }

    posts$ = this.store.select(getPostsSelector);

    ngOnInit(): void {
        // this.postService.getData().subscribe((posts) => {
        //     this.posts = posts;
        // })  
        this.store.dispatch(new GetPosts);
        this.posts$.subscribe((p) => {console.log(p)});
    }

    constructor(
        private postService: PostServise,
        private store: Store
    ){}
}