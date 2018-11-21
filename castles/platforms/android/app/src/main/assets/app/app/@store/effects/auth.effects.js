"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var effects_1 = require("@ngrx/effects");
require("rxjs/add/observable/of");
require("rxjs/add/operator/map");
require("rxjs/add/operator/switchMap");
require("rxjs/add/operator/catch");
var auth_service_1 = require("~/app/@core/services/auth.service");
var AuthEffects = /** @class */ (function () {
    function AuthEffects(actions, authService, router) {
        this.actions = actions;
        this.authService = authService;
        this.router = router;
    }
    AuthEffects = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [effects_1.Actions,
            auth_service_1.AuthService,
            router_1.Router])
    ], AuthEffects);
    return AuthEffects;
}());
exports.AuthEffects = AuthEffects;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5lZmZlY3RzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXV0aC5lZmZlY3RzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBRTNDLDBDQUF5QztBQUN6Qyx5Q0FBd0Q7QUFFeEQsa0NBQWdDO0FBQ2hDLGlDQUErQjtBQUMvQix1Q0FBcUM7QUFDckMsbUNBQWlDO0FBR2pDLGtFQUE4RDtBQUk5RDtJQUVJLHFCQUNZLE9BQWdCLEVBQ2hCLFdBQXdCLEVBQ3hCLE1BQWM7UUFGZCxZQUFPLEdBQVAsT0FBTyxDQUFTO1FBQ2hCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hCLFdBQU0sR0FBTixNQUFNLENBQVE7SUFDdkIsQ0FBQztJQU5LLFdBQVc7UUFEdkIsaUJBQVUsRUFBRTt5Q0FJWSxpQkFBTztZQUNILDBCQUFXO1lBQ2hCLGVBQU07T0FMakIsV0FBVyxDQVV2QjtJQUFELGtCQUFDO0NBQUEsQUFWRCxJQVVDO0FBVlksa0NBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEFjdGlvbiB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgQWN0aW9ucywgRWZmZWN0LCBvZlR5cGUgfSBmcm9tICdAbmdyeC9lZmZlY3RzJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgJ3J4anMvYWRkL29ic2VydmFibGUvb2YnO1xyXG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL21hcCc7XHJcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3Ivc3dpdGNoTWFwJztcclxuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9jYXRjaCc7XHJcbmltcG9ydCB7IHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuXHJcbmltcG9ydCB7QXV0aFNlcnZpY2V9IGZyb20gXCJ+L2FwcC9AY29yZS9zZXJ2aWNlcy9hdXRoLnNlcnZpY2VcIjtcclxuXHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBBdXRoRWZmZWN0cyB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHJpdmF0ZSBhY3Rpb25zOiBBY3Rpb25zLFxyXG4gICAgICAgIHByaXZhdGUgYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlLFxyXG4gICAgICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXHJcbiAgICApIHt9XHJcblxyXG4gICAgLy8gZWZmZWN0cyBnbyBoZXJlXHJcblxyXG59Il19