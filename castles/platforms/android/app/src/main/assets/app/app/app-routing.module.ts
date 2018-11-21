import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import {HomePageComponent} from "~/app/components/home-page/home-page.component";
import {SignUpComponent} from "~/app/components/sign-up/sign-up.component";
import {LogInComponent} from "~/app/components/log-in/log-in.component";

const routes: Routes = [
    { path: 'log-in', component: LogInComponent },
    { path: 'sign-up', component: SignUpComponent },
    { path: '', component: HomePageComponent },
    { path: '**', redirectTo: '/' }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
