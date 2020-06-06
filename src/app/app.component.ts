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

  public isUIBlocked: boolean;

  constructor(private commonData: CommonDataPipeService) {

    commonData.isUIBlocedObj.subscribe(data => this.isUIBlocked = data);

  }

  ngOnInit(): void {
    this.commonData.setIsUIBlocked(true);
    setTimeout(() => {
      this.commonData.setIsUIBlocked(false);
    }, 1000);
  }

}
