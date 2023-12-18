import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', redirectTo: 'dashboard', pathMatch: 'full'},
    { path: 'dashboard', loadComponent: () => import('./pages/dashboard/dashboard.component').then((m) => m.DashboardComponent) },
    { path: 'projects', loadComponent: () => import('./pages/projects/projects.component').then((m) => m.ProjectsComponent) },
    { path: 'sprints', loadComponent: () => import('./pages/sprints/sprints.component').then((m) => m.SprintsComponent) },
    { path: 'tasks', loadComponent: () => import('./pages/tasks/tasks.component').then((m) => m.TasksComponent) },
    { path: '**', loadComponent: () => import('./shared/ui/not-found/not-found.component').then((m) => m.NotFoundComponent) },
];
