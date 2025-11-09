import { CanMatchFn, RedirectCommand, Router, Routes } from '@angular/router';
import { NoTask } from './tasks/no-task/no-task';
import { resolveTitle, resolveUserName, UserTasks } from './users/user-tasks/user-tasks';
import { NotFound } from './not-found/not-found';
import { routes as userRoutes } from './users/users.routes';
import { inject } from '@angular/core';


const dummyCanMatch: CanMatchFn = (route, segments) => {
    const router = inject(Router);
    const shouldGetAccess = Math.random();
    if(shouldGetAccess < 1)   {
        return true;
    }
    return new RedirectCommand(router.parseUrl('/unauthorized'));
}
export const routes: Routes = [
    {
        path: '',
        component: NoTask,
        title: 'No task selected'
    },
    {
        path: 'users/:userId', // <your-domain>/users/<uid>
        component: UserTasks,
        children: userRoutes,
        canMatch: [dummyCanMatch],
        resolve: {
            userName: resolveUserName
        },
        title: resolveTitle
    },

    {
        path: '**',
        component: NotFound
    }
];
