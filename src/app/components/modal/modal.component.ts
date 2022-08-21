import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IPost } from 'src/app/models/post';
import { faArrowUp, faArrowDown, faRupiahSign } from "@fortawesome/free-solid-svg-icons";
import { DateFormattingService } from 'src/app/services/date-formatting.service';
import { Store } from '@ngrx/store';
//import { showPost } from 'src/app/reducers/modal-windows';
import { PostServise } from 'src/app/services/posts.service';
import { ShowPost } from 'src/app/store/actions/modal-windows.actions';
import { TempService } from 'src/app/services/temp.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: []
})
export class ModalComponent implements OnInit {
  
  //@Input() post: IPost
  //@Input() index: number

  post: IPost;
  index:number;

  faArrowUp = faArrowUp
  faArrowDown = faArrowDown

  votesAmount = 0;
  date: string;

  ngOnInit(): void {
    this.index = this.tempService.getIndex();
    this.postService.getData().subscribe((posts) => {
      this.post = posts[this.index];      
    }) 
    this.votesAmount = this.post.amountVotes;
    this.date = this.dateFormattingService.dateFormatting(this.post.date_time);
  }

  constructor(
    private dateFormattingService: DateFormattingService,
    private postService: PostServise,
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
