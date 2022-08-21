import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { Store } from '@ngrx/store';
import { postsArray } from 'src/app/data/postsArray';
import { IPost } from 'src/app/models/post';
import { DateFormattingService } from 'src/app/services/date-formatting.service';
import { TempService } from 'src/app/services/temp.service';
import { AddPost } from 'src/app/store/actions/modal-windows.actions';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: []
})
export class AddPostComponent implements OnInit {

  constructor(
    private sanitization: DomSanitizer,
    private tempService: TempService,
    private dateFormattingService: DateFormattingService,
    private store: Store
  ) {}

  form = new FormGroup({
    title: new FormControl<string>(''),
    image: new FormControl<string>('')
  })

  addedImg: any = '';
  newPost: IPost;
  date: string;
  showErrorTitle = false;
  showErrorImg = false;

  img(event: any){
    this.addedImg = this.sanitization.bypassSecurityTrustUrl(window.URL.createObjectURL(event.target.files[0])) 
  }

  closeAddPost(){
    this.store.dispatch(new AddPost);
  }

  onSubmit(value: any){
    this.date = this.dateFormattingService.createDate();
    
    if(value.title !== '' && this.addedImg !== ''){
      this.newPost = {
        username: this.tempService.getUserName(),
        image: this.addedImg,
        title: value.title,
        amountVotes: 0,
        date_time: this.date,
        comments: []
      }
      postsArray.unshift(this.newPost);
      this.closeAddPost();
    }else if(value.title === ''){
      this.showErrorTitle = true;
    }else if(this.addedImg === ''){
      this.showErrorImg = true;
    }
  }

  ngOnInit(): void {
  }

}
