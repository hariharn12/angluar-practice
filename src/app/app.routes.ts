import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { ClientListComponent } from './client-list/client-list.component';
import { AddClientComponent } from './add-client/add-client.component';
import { ClientDetailsComponent } from './client-details/client-details.component';

export const routes: Routes = [
    {
        path:'client-list',
        component:ClientListComponent,
        children:[
            {
                path:'client-details',
                component:ClientDetailsComponent,
            }
        ]
    },
    {
        path:'add-client',
        component:AddClientComponent,
    },
 
];
