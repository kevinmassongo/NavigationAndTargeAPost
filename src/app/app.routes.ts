import { Routes } from '@angular/router';


export const appRoutes: Routes = [
    {
        path: 'accueil',
        title : 'Accueil',
        loadComponent: () => import('./components/post/post.component')
        },
    {
        path: 'apropos',
        title : 'A Propos',
        loadComponent: () => import('./components/formulaire/formulaire.component')
    },
    {
        path: 'contact',
        title : 'Contact',
        loadComponent: () => import('./components/editPost/edit-post.component')
    },
    {
        path: 'edit/:id',
        title : 'Editer le post',
        loadComponent: () => import('./components/editPost/edit-post.component')
    },
];
