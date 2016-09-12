/**
 * Created by rohit on 7/9/16.
 */

import {Routes, RouterModule} from "@angular/router";
import {ModuleWithProviders} from "@angular/core";
import {HeroesComponent} from "./heroes/heroes.component";
import {HeroDetailComponent} from "./hero-detail/hero-detail.component";
import {DashboardComponent} from "./dashboard/dashboard.component";

const appRoutes : Routes = [
    {
        path: 'heroes',
        component: HeroesComponent
    },
    {
        path: 'heroes/:id',
        component: HeroDetailComponent
    },
    {
        path: 'dashboard',
        component: DashboardComponent
    },
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);