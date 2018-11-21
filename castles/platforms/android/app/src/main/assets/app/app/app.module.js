"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var app_routing_module_1 = require("./app-routing.module");
var app_component_1 = require("./app.component");
var home_page_component_1 = require("./components/home-page/home-page.component");
var sign_up_component_1 = require("./components/sign-up/sign-up.component");
var log_in_component_1 = require("./components/log-in/log-in.component");
var nativescript_angular_1 = require("nativescript-angular");
var auth_service_1 = require("~/app/@core/services/auth.service");
var http_1 = require("@angular/common/http");
var effects_1 = require("~/node_modules/@ngrx/effects");
var auth_effects_1 = require("~/app/@store/effects/auth.effects");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            bootstrap: [
                app_component_1.AppComponent
            ],
            imports: [
                nativescript_module_1.NativeScriptModule,
                nativescript_angular_1.NativeScriptFormsModule,
                http_1.HttpClientModule,
                effects_1.EffectsModule.forRoot([auth_effects_1.AuthEffects]),
                app_routing_module_1.AppRoutingModule
            ],
            declarations: [
                app_component_1.AppComponent,
                home_page_component_1.HomePageComponent,
                sign_up_component_1.SignUpComponent,
                log_in_component_1.LogInComponent
            ],
            providers: [auth_service_1.AuthService],
            schemas: [
                core_1.NO_ERRORS_SCHEMA
            ]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkQ7QUFDM0QsZ0ZBQThFO0FBRTlFLDJEQUF3RDtBQUN4RCxpREFBK0M7QUFDL0Msa0ZBQStFO0FBQy9FLDRFQUF5RTtBQUN6RSx5RUFBc0U7QUFDdEUsNkRBQTZEO0FBQzdELGtFQUE4RDtBQUM5RCw2Q0FBc0Q7QUFDdEQsd0RBQTJEO0FBQzNELGtFQUE4RDtBQXlCOUQ7SUFBQTtJQUF5QixDQUFDO0lBQWIsU0FBUztRQXRCckIsZUFBUSxDQUFDO1lBQ04sU0FBUyxFQUFFO2dCQUNQLDRCQUFZO2FBQ2Y7WUFDRCxPQUFPLEVBQUU7Z0JBQ0wsd0NBQWtCO2dCQUNsQiw4Q0FBdUI7Z0JBQ3ZCLHVCQUFnQjtnQkFDaEIsdUJBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQywwQkFBVyxDQUFDLENBQUM7Z0JBQ3BDLHFDQUFnQjthQUNuQjtZQUNELFlBQVksRUFBRTtnQkFDViw0QkFBWTtnQkFDWix1Q0FBaUI7Z0JBQ2pCLG1DQUFlO2dCQUNmLGlDQUFjO2FBQ2pCO1lBQ0QsU0FBUyxFQUFFLENBQUMsMEJBQVcsQ0FBQztZQUN4QixPQUFPLEVBQUU7Z0JBQ0wsdUJBQWdCO2FBQ25CO1NBQ0osQ0FBQztPQUNXLFNBQVMsQ0FBSTtJQUFELGdCQUFDO0NBQUEsQUFBMUIsSUFBMEI7QUFBYiw4QkFBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBOT19FUlJPUlNfU0NIRU1BIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdE1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9uYXRpdmVzY3JpcHQubW9kdWxlXCI7XG5cbmltcG9ydCB7IEFwcFJvdXRpbmdNb2R1bGUgfSBmcm9tIFwiLi9hcHAtcm91dGluZy5tb2R1bGVcIjtcbmltcG9ydCB7IEFwcENvbXBvbmVudCB9IGZyb20gXCIuL2FwcC5jb21wb25lbnRcIjtcbmltcG9ydCB7IEhvbWVQYWdlQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2hvbWUtcGFnZS9ob21lLXBhZ2UuY29tcG9uZW50JztcbmltcG9ydCB7IFNpZ25VcENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9zaWduLXVwL3NpZ24tdXAuY29tcG9uZW50JztcbmltcG9ydCB7IExvZ0luQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2xvZy1pbi9sb2ctaW4uY29tcG9uZW50JztcbmltcG9ydCB7TmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGV9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhclwiO1xuaW1wb3J0IHtBdXRoU2VydmljZX0gZnJvbSBcIn4vYXBwL0Bjb3JlL3NlcnZpY2VzL2F1dGguc2VydmljZVwiO1xuaW1wb3J0IHtIdHRwQ2xpZW50TW9kdWxlfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uL2h0dHBcIjtcbmltcG9ydCB7RWZmZWN0c01vZHVsZX0gZnJvbSBcIn4vbm9kZV9tb2R1bGVzL0BuZ3J4L2VmZmVjdHNcIjtcbmltcG9ydCB7QXV0aEVmZmVjdHN9IGZyb20gXCJ+L2FwcC9Ac3RvcmUvZWZmZWN0cy9hdXRoLmVmZmVjdHNcIjtcblxuXG5ATmdNb2R1bGUoe1xuICAgIGJvb3RzdHJhcDogW1xuICAgICAgICBBcHBDb21wb25lbnRcbiAgICBdLFxuICAgIGltcG9ydHM6IFtcbiAgICAgICAgTmF0aXZlU2NyaXB0TW9kdWxlLFxuICAgICAgICBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSxcbiAgICAgICAgSHR0cENsaWVudE1vZHVsZSxcbiAgICAgICAgRWZmZWN0c01vZHVsZS5mb3JSb290KFtBdXRoRWZmZWN0c10pLFxuICAgICAgICBBcHBSb3V0aW5nTW9kdWxlXG4gICAgXSxcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgQXBwQ29tcG9uZW50LFxuICAgICAgICBIb21lUGFnZUNvbXBvbmVudCxcbiAgICAgICAgU2lnblVwQ29tcG9uZW50LFxuICAgICAgICBMb2dJbkNvbXBvbmVudFxuICAgIF0sXG4gICAgcHJvdmlkZXJzOiBbQXV0aFNlcnZpY2VdLFxuICAgIHNjaGVtYXM6IFtcbiAgICAgICAgTk9fRVJST1JTX1NDSEVNQVxuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgQXBwTW9kdWxlIHsgfVxuIl19