import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { postsArray } from 'src/app/data/postsArray';
import { IPost } from 'src/app/models/post';
import { DateFormattingService } from 'src/app/services/date-formatting.service';
import { TempService } from 'src/app/services/temp.service';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: []
})
export class AddPostComponent implements OnInit {

  @Input() showModal: boolean
  @Output() hideModal = new EventEmitter<boolean>();

  constructor(
    private sanitization: DomSanitizer,
    private tempService: TempService,
    private dateFormattingService: DateFormattingService
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
      this.hideModal.emit(false);
    }else if(value.title === ''){
      this.showErrorTitle = true;
    }else if(this.addedImg === ''){
      this.showErrorImg = true;
    }
  }

  ngOnInit(): void {
  }

}
