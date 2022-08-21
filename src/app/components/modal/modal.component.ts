import { Component, OnInit } from '@angular/core';
import { IPost } from 'src/app/models/post';
import { faArrowUp, faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { DateFormattingService } from 'src/app/services/date-formatting.service';
import { Store } from '@ngrx/store';
import { ShowPost } from 'src/app/store/actions/modal-windows.actions';
import { TempService } from 'src/app/services/temp.service';
import { getPostsSelector } from 'src/app/store/selectors/get-posts.selectors';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: []
})
export class ModalComponent implements OnInit {

  posts: IPost[];
  post: IPost;
  index:number;

  faArrowUp = faArrowUp
  faArrowDown = faArrowDown

  votesAmount = 0;
  date: string;

 
  posts$ = this.store.select(getPostsSelector).subscribe((posts) => {
    this.posts = posts
  })

  ngOnInit(): void {
    this.index = this.tempService.getIndex();
    this.post = this.posts[this.index];
    this.votesAmount = this.post.amountVotes;
    this.date = this.dateFormattingService.dateFormatting(this.post.date_time);
  }

  constructor(
    private dateFormattingService: DateFormattingService,
    private tempService: TempService,
    private store: Store
    ) {}

  increaseVotes(){
    this.votesAmount += 1
  }

  decreaseVotes(){
      this.votesAmount -= 1
  }

  closePost(){
    this.store.dispatch(new ShowPost);
  }
}
