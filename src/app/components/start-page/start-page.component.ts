import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TempService } from 'src/app/services/temp.service';

@Component({
  selector: 'app-start-page',
  templateUrl: './start-page.component.html',
  styleUrls: []
})
export class StartPageComponent implements OnInit {

  constructor(
    //private formBuilder: FormBuilder,
    private tempService: TempService,
    private router: Router
  ){
    // this.usernameForm = this.formBuilder.group({
    //   username: new FormControl<string>('', [
    //     Validators.required,
    //     Validators.minLength(4)
    //   ]),
    // })
  }

  form = new FormGroup({
    username: new FormControl<string>(''),
  })

  showError = false;

  onSubmit(value: any){
    console.log(value.username);
    this.tempService.changeUsername(value.username);
    console.log(this.tempService.getUserName());
    if(value.username === ''){
      this.showError = true;
    }else{
      this.showError = false;
      this.router.navigate(['/posts']);
    }
  }

  ngOnInit(): void {
  }

}
