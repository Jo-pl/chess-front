import { Component, OnInit } from '@angular/core';
import { HistoryService } from 'src/app/services/history.service';
@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  historyList:string[] = [];

  constructor(private historyService:HistoryService) {
    this.historyList = historyService.getHistory();
  }

  ngOnInit(): void {
  }

}
