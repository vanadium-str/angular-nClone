import { Component, OnInit, Input } from '@angular/core';
import { faArrowUp, faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { Store } from '@ngrx/store';
import { IPost } from "src/app/models/post";
import { TempService } from 'src/app/services/temp.service';
import { AddComment, ShowPost } from 'src/app/store/actions/modal-windows.actions';
import { showAddCommentSelector, showPostSelector } from 'src/app/store/selectors/modal-windows.selectors';

@Component({
  selector: 'app-post-view',
  templateUrl: './post-view.component.html',
  styleUrls: []
})
export class PostViewComponent implements OnInit {
  @Input() post: IPost
  @Input() index: number

  faArrowUp = faArrowUp
  faArrowDown = faArrowDown

  votesAmount: number;
  date: string;
  showComments = false;

  ngOnInit(): void {
      this.votesAmount = this.post.amountVotes;    
  }

  constructor(
    private store: Store,
    private tempService: TempService
    ) {}

  increaseVotes(){
    this.votesAmount += 1;
  }

  decreaseVotes(){
    this.votesAmount -= 1;
  }

  setIndex(index: number){
    this.tempService.setIndex(index);
  }

  showPost$ = this.store.select(showPostSelector)
  showAddComment$ = this.store.select(showAddCommentSelector)

  showAddComment(){
    this.store.dispatch(new AddComment)
  }
  
  showPost(){
    this.store.dispatch(new ShowPost);
  }
}
