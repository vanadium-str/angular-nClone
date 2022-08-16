import { Component, OnInit } from "@angular/core";
import { IPost } from "src/app/models/post";
import { postsArray } from "src/app/data/postsArray";

@Component({
    selector: 'all-posts',
    templateUrl: './all-posts.component.html',
    styleUrls: []
})

export class AllPostsComponent implements OnInit{

    posts: IPost[] = postsArray;
    showModal = false;

    hideModal(hide: boolean){
        this.showModal = hide;
    }

    ngOnInit(): void {   
    }
}