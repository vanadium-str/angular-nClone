import { Component, OnInit, Input } from '@angular/core';
import { faArrowUp, faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { IPost } from "src/app/models/post";
import { DateFormattingService } from 'src/app/services/date-formatting.service';

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
  showPost = false;

  ngOnInit(): void {
      this.votesAmount = this.post.amountVotes;
      this.date = this.dateFormattingService.dateFormatting(this.post.date_time);  
  }

  constructor(private dateFormattingService: DateFormattingService) {}
  

  increaseVotes(){
    this.votesAmount += 1;
  }

  decreaseVotes(){
      this.votesAmount -= 1;
  }

  hidePost(hide: boolean){
      this.showPost = hide;
  }
}
