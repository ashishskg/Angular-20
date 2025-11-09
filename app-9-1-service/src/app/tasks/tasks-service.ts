import { inject, Injectable, signal } from '@angular/core';
import { TaskModel, TaskStatus } from './task-model';
import { LoggingService } from '../logging-service';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  private tasks = signal<TaskModel[]>([]);
  private loggingService = inject(LoggingService);

  allTasks = this.tasks.asReadonly();

  addTask(taskData: { title: string; description: string }) {
    const newTask: TaskModel = {
      ...taskData,
      id: Math.random().toString(),
      status: 'OPEN',
    };
    this.tasks.update((oldTasks) => [...oldTasks, newTask]);
    this.loggingService.log('ADDED TASK WITH TITLE ' + taskData.title);
  }

  updateTasksStatus(taskId: string, newStatus: TaskStatus) {
    this.tasks.update((oldTasks) =>
      oldTasks.map((task) =>
        task.id === taskId ? { ...task, status: newStatus } : task
      )
    );
  }
}
