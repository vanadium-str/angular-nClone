import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class TempService {

  private username = new BehaviorSubject<string>('');

  public changeUsername(name: string): void{
    this.username.next(name);
  }

  public getUserName(): string {
      return this.username.getValue();
  }

  constructor() { }
}
