import { Component, OnInit } from '@angular/core';
import { CommonDataPipeService } from './shared/common-data-pipe.service';
import { timeout } from 'rxjs/operators';
import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'to-do-app';

  public isUIBlocked = false;

  constructor(private commonData: CommonDataPipeService) {

  }

  ngOnInit(): void {

    this.commonData.isUIBlocedObj.subscribe(data => {
      setTimeout(() => {
        this.isUIBlocked = data;
      }, 10);
    });

  }

}
