import { Component, Input, OnInit } from '@angular/core';
import { faArrowUp, faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { DateFormattingService } from 'src/app/services/date-formatting.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: []
})
export class CommentsComponent implements OnInit {

  @Input() comment: any

  ngOnInit(): void {
    this.votesAmount = this.comment.amountVotes;
    this.date = this.dateFormattingService.dateFormatting(this.comment.date_time);
  }

  constructor(private dateFormattingService: DateFormattingService) {}

  faArrowUp = faArrowUp
  faArrowDown = faArrowDown

  votesAmount: number;
  date: string;

  increaseVotes(){
    this.votesAmount += 1;
  }

  decreaseVotes(){
      this.votesAmount -= 1;
  }
}
