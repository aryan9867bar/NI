import { Component } from "@angular/core";
import { Routes } from "@angular/router";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";


export const router:Routes = [
    {
        path:"login",
        component:LoginComponent,
    },

    {
        path:"register",
        component:RegisterComponent,
    },

    {
        path:"Dashboard",
        component:DashboardComponent,
        // children:[
        //     {
        //         path:"student",
        //         component: ,
        //     },

        //     {
        //         path:"course",
        //         component: ,
        //     }
        // ]

    },

    {
        path:"",
         redirectTo:"/login",
         pathMatch:"full"
    }

]

