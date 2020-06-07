import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreComponent } from './core.component';
import { AuthGuardService } from '../shared/auth-guard.service';
import { RouterModule, Route } from '@angular/router';
import { ViewTaskComponent } from './view-task/view-task.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { SharedModule } from '../shared/shared.module';
import { TaskArchiveComponent } from './task-archive/task-archive.component';
import { FormsModule } from '@angular/forms';

export const CORE_ROUTES: Route[] = [
  {
    path: '', canActivate: [AuthGuardService], canActivateChild: [AuthGuardService], component: CoreComponent, children: [
      { path: '', redirectTo: 'view-task', pathMatch: 'full' },
      { path: 'view-task', component: ViewTaskComponent },
      { path: 'archived-task', component: TaskArchiveComponent }
    ]
  }
];

@NgModule({
  declarations: [
    CoreComponent,
    ViewTaskComponent,
    AddTaskComponent,
    TaskArchiveComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(CORE_ROUTES),
    SharedModule,
    FormsModule
  ]
})
export class CoreModule { }
