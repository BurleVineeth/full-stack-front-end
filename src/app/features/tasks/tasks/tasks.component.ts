import { DatePipe, NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { Tasks } from '@core/constants';
import { Task } from '@core/models';
import { ButtonComponent } from '@shared/button/button.component';
import { ModalComponent } from '@shared/modal/modal.component';
import { AddTaskComponent } from '../add-task/add-task.component';
import { ImageComponent } from '@shared/image/image.component';

@Component({
  selector: 'app-tasks',
  imports: [
    DatePipe,
    NgStyle,
    ButtonComponent,
    ModalComponent,
    AddTaskComponent,
    ImageComponent,
  ],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.scss',
})
export class TasksComponent {
  public canShowTaskForm: boolean = false;
  public tasks: Task[] = Tasks;

  public addTask() {
    this.canShowTaskForm = true;
  }

  public closeTaskForm() {
    this.canShowTaskForm = false;
  }
}
