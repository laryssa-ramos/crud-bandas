import { Routes } from '@angular/router';
import { Login } from './pages/login/login';
import { Bandas } from './pages/bandas/bandas';
import { authGuard } from './guards/auth-guard';

export const routes: Routes = [
    {
        path:'login',
        component: Login
    },
    {
        path:'bandas',
        component : Bandas,
        canActivate:[authGuard]
    },
    {
        path:'',
        redirectTo:'login',
        pathMatch:'full'
    }
];
