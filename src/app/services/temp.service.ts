import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class TempService {

  private username = new BehaviorSubject<string>('');

  private index = new BehaviorSubject<number>(-1);

  public changeUsername(name: string): void{
    this.username.next(name);
  }

  public getUserName(): string {
      return this.username.getValue();
  }

  public setIndex(index: number): void {
    this.index.next(index);
  }

  public getIndex(): number {
    return this.index.getValue();
  }

  constructor() { }
}
