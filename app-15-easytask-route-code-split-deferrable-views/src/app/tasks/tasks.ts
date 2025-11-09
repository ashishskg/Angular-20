import { Component, computed, DestroyRef, inject, input, OnInit, signal } from '@angular/core';
import { TaskModel } from './task/task-model';
import { Task } from './task/task';
import { TasksService } from './tasks-service';
import { ActivatedRoute, Resolve, ResolveFn, RouterLink } from '@angular/router';

@Component({
  selector: 'app-tasks',
  imports: [Task, RouterLink],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css',
})
export class Tasks  {
  userTasks = input.required<TaskModel[]>();
    userId = input.required<string>();
    order = input<'asc' | 'desc' | undefined>();
    // order = signal<'asc' | 'desc'>('desc');   
  } 

    // private activatedRoute = inject(ActivatedRoute);
    // private destroyRef = inject(DestroyRef);

    // ngOnInit(): void {
    //   const subcription = this.activatedRoute.queryParams.subscribe({
    //     next: (params) => (this.order.set(params['order'])),
    //   });

    //   this.destroyRef.onDestroy(() => subcription.unsubscribe());
    // }


export const resolveUserTasks: ResolveFn<TaskModel[]> = (
      activatedRouteSnapshot,
      routerState
    ) => {
      const order = activatedRouteSnapshot.queryParams['order'];
      const tasksService = inject(TasksService);
      const tasks = tasksService
            .allTasks()
            .filter((task) => task.userId === activatedRouteSnapshot.paramMap.get('userId'));

            if(order && order == 'asc') {
              tasks.sort((a, b) => (a.id > b.id ? 1 : -1));
            } else {
              tasks.sort((a, b) => (a.id > b.id ? -1 : 1));
            }
            return tasks.length ? tasks: [];
    };
