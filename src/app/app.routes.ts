import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', redirectTo: 'dashboard', pathMatch: 'full'},
    { path: 'dashboard', loadComponent: () => import('./pages/dashboard/dashboard.component').then((m) => m.DashboardComponent) },
    { path: 'collections', loadComponent: () => import('./pages/collections/collections.component').then((m) => m.CollectionsComponent) },
    { path: 'collections/:id', loadComponent: () => import('./pages/collection/collection.component').then((m) => m.CollectionComponent) },
    { path: 'tasks', loadComponent: () => import('./pages/tasks/tasks.component').then((m) => m.TasksComponent) },
    { path: '**', loadComponent: () => import('./shared/ui/not-found/not-found.component').then((m) => m.NotFoundComponent) },
];
