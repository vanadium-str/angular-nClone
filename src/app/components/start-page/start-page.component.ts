import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { TempService } from 'src/app/services/temp.service';
import { SetUsername } from 'src/app/store/actions/username.actions';

@Component({
  selector: 'app-start-page',
  templateUrl: './start-page.component.html',
  styleUrls: []
})
export class StartPageComponent implements OnInit {

  constructor(
    private tempService: TempService,
    private router: Router,
    private store: Store
  ){}

  form = new FormGroup({
    username: new FormControl<string>(''),
  })

  showError = false;

  onSubmit(value: any){
    this.store.dispatch(new SetUsername(value));
    this.tempService.changeUsername(value.username);
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
