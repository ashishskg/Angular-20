import { Component, computed, inject, signal } from '@angular/core';
import { TaskItem } from './task-item/task-item';
import { TasksService } from '../tasks-service';
import {
  TASK_STATUS_OPTIONS,
  TaskStatusOptions,
  taskStatusOptionsProvider,
} from '../task-model';

@Component({
  selector: 'app-tasks-list',
  imports: [TaskItem],
  templateUrl: './tasks-list.html',
  styleUrl: './tasks-list.css',
  providers: [taskStatusOptionsProvider],
})
export class TasksList {
  private tasksService = inject(TasksService);
  private selectedFilter = signal<string>('all');
  taskStatusOptions = inject(TASK_STATUS_OPTIONS);
  tasks = computed(() => {
    console.log('TasksList');
    switch (this.selectedFilter()) {
      case 'open':
        return this.tasksService
          .allTasks()
          .filter((task) => task.status === 'OPEN');
      case 'in-progress':
        return this.tasksService
          .allTasks()
          .filter((task) => task.status === 'IN_PROGRESS');
      case 'done':
        return this.tasksService
          .allTasks()
          .filter((task) => task.status === 'DONE');
      default:
        return this.tasksService.allTasks();
    }
  });

  onChangeTasksFilter(filter: string) {
    this.selectedFilter.set(filter);
  }
}
