import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DateFormattingService {

  months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  week = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  dateFormatting(value: string) {
    let arrDate = value.split(' ');
    let arrTime = arrDate[3].split(':');
    let newDate = `${arrDate[1]} ${arrDate[2]}, ${arrDate[5]} ${arrTime[0]}:${arrTime[1]}`;
    return newDate;
}

  createDate(){
    let date = new Date();
    let minutes;
    let seconds;
    if(date.getMinutes() < 10){
      minutes = '0' + date.getMinutes();
    }else{
      minutes = date.getMinutes();
    }
    if(date.getSeconds() < 10){
      seconds = '0' + date.getSeconds();
    }else{
      seconds = date.getSeconds();
    }
    let result = `${this.week[date.getDay()]} ${this.months[date.getMonth()]} ${date.getDate()} ${date.getHours()}:${minutes}:${seconds} UTC ${date.getFullYear()}`;
    return result;
  }
}
