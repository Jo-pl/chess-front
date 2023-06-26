import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HistoryService {

  historyList:string[] = [];

  constructor() { }

  getHistory():Array<string>{
    return this.historyList;
  }
}
