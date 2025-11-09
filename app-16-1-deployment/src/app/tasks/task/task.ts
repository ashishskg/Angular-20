import { Component, inject, input } from '@angular/core';
import { TasksService } from '../tasks-service';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskModel } from './task-model';
import { DatePipe } from '@angular/common';
import { Card } from '../../shared/card/card';

@Component({
  selector: 'app-task',
  imports: [DatePipe, Card],
  templateUrl: './task.html',
  styleUrl: './task.css',
})
export class Task {
  task = input.required<TaskModel>();
  private tasksService = inject(TasksService);
  private router = inject(Router);
  private activatedRoute = inject(ActivatedRoute);

  onComplete() {
    this.tasksService.removeTask(this.task().id);
    this.router.navigate(['./'], {
      relativeTo: this.activatedRoute,
      onSameUrlNavigation: 'reload',
      queryParamsHandling: 'preserve',
    });
  }
}
