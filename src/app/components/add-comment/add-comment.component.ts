import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { postsArray } from 'src/app/data/postsArray';
import { DateFormattingService } from 'src/app/services/date-formatting.service';
import { TempService } from 'src/app/services/temp.service';

@Component({
  selector: 'app-add-comment',
  templateUrl: './add-comment.component.html',
  styleUrls: []
})
export class AddCommentComponent implements OnInit {

  @Input() index: number
  @Input() addComment: boolean
  @Output() closeComment = new EventEmitter<boolean>();

  showError = false;
  date: string;
  comment: any;

  constructor(
    private tempService: TempService,
    private dateFormattingService: DateFormattingService
  ) { }

  form = new FormGroup({
    comment: new FormControl<string>('')
  })

  onSubmit(value: any){
    this.date = this.dateFormattingService.createDate();
    if(value.comment !== ''){
      this.comment = {
        comment: value.comment,
        author: this.tempService.getUserName(),
        amountVotes: 0,
        date_time: this.date,
        amountComments: 0
      }
      postsArray[this.index].comments.push(this.comment);
      this.closeComment.emit(false);
    }else{
      this.showError = true;
    }
  }

  ngOnInit(): void {
  }

}
