import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IPost } from 'src/app/models/post';
import { faArrowUp, faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { DateFormattingService } from 'src/app/services/date-formatting.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: []
})
export class ModalComponent implements OnInit {
  
  @Input() post: IPost
  @Input() index: number
  @Input() showPost: boolean
  @Output() hidePost = new EventEmitter<boolean>();

  faArrowUp = faArrowUp
  faArrowDown = faArrowDown

  votesAmount = 0;
  date: string;

  ngOnInit(): void {
    this.votesAmount = this.post.amountVotes;
    this.date = this.dateFormattingService.dateFormatting(this.post.date_time); 
  }

  constructor(private dateFormattingService: DateFormattingService) {}

  increaseVotes(){
    this.votesAmount += 1
  }

  decreaseVotes(){
      this.votesAmount -= 1
  }
}
