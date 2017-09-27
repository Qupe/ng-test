import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertDate'
})
export class ConvertDatePipe implements PipeTransform {

  transform(date: any, args?: any): any {

    const diff = +new Date() - (date * 1000),
      sec = Math.floor(diff / 1000),
      min = Math.floor(diff / 60000),
      hour = Math.floor(diff / 3600000),
      day = Math.floor(diff / 86400000),
      month = Math.floor(diff / 2592000000),
      year = Math.floor(diff / 31536000000);

    if (diff < 1000) {
      return ' только что';
    } else if (sec < 60) {
      return sec + 's';
    } else if (min < 60) {
      return min + 'm';
    } else if (hour < 24) {
      return hour + 'h';
    } else if (day < 28) {
      return day + 'd';
    } else if (month < 12) {
      return month + 'm';
    } else if (year < 100) {
      return year + 'y';
    }
  }

}
