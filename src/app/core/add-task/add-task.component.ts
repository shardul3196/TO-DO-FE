import { Component, OnInit } from '@angular/core';
import { RequestsService } from 'src/app/shared/requests.service';
import { ApiConstants } from 'src/app/shared/app-constant';
import { NotifyServiceService } from 'src/app/shared/notify-service.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  constructor(
    private request: RequestsService,
    private constants: ApiConstants,
    private notify: NotifyServiceService) { }

  public addTaskObj = {
    title: null,
    description: null,
    createdDate: new Date(),
    updatedDate: null,
    startDate: null,
    endDate: null,
    status: 1,
    colorCode: null,
    notifyOptContact: false,
    notifyOptEmail: false,
    notifyOptWeb: false,
    urlToImage: '',
    location: 'Bengaluru',
    locationLat: null,
    locationLong: null,
    user: {
      id: localStorage.getItem('id')
    },
    tagMappingList: null
  };

  public selectedTagList: any[];
  public returnResponse: any;
  public taskStatus: any[];
  public taskColor: any[];
  public taskTag: any[];
  public selectedColor: string;

  ngOnInit() {
    this.taskStatus = [];
    this.taskColor = [];
    this.taskTag = [];
    this.selectedTagList = [];
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
  /*addUserToTask(){
    this.addTaskObj.user=
  }*/
  addTasks() {
    this.addTaskObj.tagMappingList = this.selectedTagList;
    this.request.postData(this.constants.ADD_TASK, this.addTaskObj).subscribe(data => {
      if (data.responseStatus === 'SUCCESS') {
        this.returnResponse = data.response;
      } else {
        this.notify.errorMessageByString('Tasks cannot be Created');
      }
    }, error => {
      this.notify.errorMessageByString('Some error occurred');
    });
  }

  selectColor(colorName, colorId) {
    this.addTaskObj.colorCode = colorId;
    this.selectedColor = colorName;
  }

  reset() {
    this.addTaskObj = {
      title: null,
      description: null,
      createdDate: new Date(),
      updatedDate: null,
      startDate: null,
      endDate: null,
      status: 1,
      colorCode: null,
      notifyOptContact: false,
      notifyOptEmail: false,
      notifyOptWeb: false,
      urlToImage: "",
      location: "Bengaluru",
      locationLat: null,
      locationLong: null,
      user: {
        id: localStorage.getItem('id')
      },
      tagMappingList: []
    };
    this.selectedTagList = [];
  }

  addTag(data) {
    const temp = {
      tagId: +data
    };
    this.selectedTagList.push(temp);
  }
}
