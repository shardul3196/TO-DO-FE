import { Component, OnInit } from '@angular/core';
import { RequestsService } from 'src/app/shared/requests.service';
import { ApiConstants } from 'src/app/shared/app-constant';
import { NotifyServiceService } from 'src/app/shared/notify-service.service';

@Component({
  selector: 'app-task-archive',
  templateUrl: './task-archive.component.html',
  styleUrls: ['./task-archive.component.css']
})
export class TaskArchiveComponent implements OnInit {


  public searchTaskObj = {
    title: null,
    fromEndDate: null,
    toEndDate: null,
    status: 3,
    colorCode: null,
    orderBy: 'endDate',
    sortType: 'desc',
    tag: null
  };

  public taskList: any[];
  public taskStatus: any[];
  public taskColor: any[];
  public taskTag: any[];
  public orderBy = 'endDate';
  public sortType = true;
  public cols = [{
    value: 'endDate',
    name: 'Due Date'
  },
  {
    value: 'title',
    name: 'Title'
  },
  {
    value: 'colorCode',
    name: 'Color'
  },
  {
    value: 'tag',
    name: 'Tag'
  }];

  constructor(
    private request: RequestsService,
    private constants: ApiConstants,
    private notify: NotifyServiceService
  ) { }

  ngOnInit() {



    this.request.getData(this.constants.INIT_TASK).subscribe(data => {
      if (data.responseStatus === 'SUCCESS') {
        this.taskColor = data.response.col;
        this.taskTag = data.response.tag;
        this.taskStatus = data.response.status;
      }
    }, error => {
      this.notify.errorMessageByString('Some error occurred');
    });
  }

  getTasks() {
    this.request.postData(this.constants.SEARCH_TASK, this.searchTaskObj).subscribe(data => {
      if (data.responseStatus === 'SUCCESS') {
        this.taskList = data.response;
      } else {
        this.notify.errorMessageByString('Tasks cannot be fetched');
      }
    }, error => {
      this.notify.errorMessageByString('Some error occurred');
    });
  }

  selectColor(color: string) {
    this.searchTaskObj.colorCode = color;
  }

  reset() {
    this.searchTaskObj = {
      title: null,
      fromEndDate: null,
      toEndDate: null,
      status: 3,
      colorCode: null,
      orderBy: 'endDate',
      sortType: 'desc',
      tag: null
    };
  }

  toggleSortType() {
    if (this.sortType) {
      this.searchTaskObj.sortType = 'asc';
    } else {
      this.searchTaskObj.sortType = 'desc';
    }
    this.sortType = !this.sortType;
  }

}
