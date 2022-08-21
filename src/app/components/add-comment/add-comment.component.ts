import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { postsArray } from 'src/app/data/postsArray';
//import { addComment } from 'src/app/reducers/modal-windows';
import { DateFormattingService } from 'src/app/services/date-formatting.service';
import { TempService } from 'src/app/services/temp.service';
import { AddComment } from 'src/app/store/actions/modal-windows.actions';
import { setUsernameSelector } from "../../store/selectors/username.selectors";

@Component({
  selector: 'app-add-comment',
  templateUrl: './add-comment.component.html',
  styleUrls: []
})
export class AddCommentComponent implements OnInit {

  @Input() index: number

  showError = false;
  date: string;
  comment: any;

  constructor(
    private tempService: TempService,
    private dateFormattingService: DateFormattingService,
    private store: Store
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
      this.closeComment()
    }else{
      this.showError = true;
    }
  }

  ngOnInit(): void {
  }

  closeComment(){
    this.store.dispatch(new AddComment)
  }

}
