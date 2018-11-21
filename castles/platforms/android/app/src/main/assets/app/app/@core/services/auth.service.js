"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
        this.BASE_URL = 'http://localhost:1337';
    }
    AuthService.prototype.getToken = function () {
        return localStorage.getItem('token');
    };
    AuthService.prototype.logIn = function (email, password) {
        var url = this.BASE_URL + "/login";
        return this.http.post(url, { email: email, password: password });
    };
    AuthService.prototype.signUp = function (email, password) {
        var url = this.BASE_URL + "/register";
        return this.http.post(url, { email: email, password: password });
    };
    AuthService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], AuthService);
    return AuthService;
}());
exports.AuthService = AuthService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXV0aC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBQzNDLDZDQUFnRDtBQVFoRDtJQUdFLHFCQUFvQixJQUFnQjtRQUFoQixTQUFJLEdBQUosSUFBSSxDQUFZO1FBRjVCLGFBQVEsR0FBRyx1QkFBdUIsQ0FBQztJQUVILENBQUM7SUFFekMsOEJBQVEsR0FBUjtRQUNFLE9BQU8sWUFBWSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBRUQsMkJBQUssR0FBTCxVQUFNLEtBQWEsRUFBRSxRQUFnQjtRQUNuQyxJQUFNLEdBQUcsR0FBTSxJQUFJLENBQUMsUUFBUSxXQUFRLENBQUM7UUFDckMsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBTyxHQUFHLEVBQUUsRUFBQyxLQUFLLE9BQUEsRUFBRSxRQUFRLFVBQUEsRUFBQyxDQUFDLENBQUM7SUFDdEQsQ0FBQztJQUVELDRCQUFNLEdBQU4sVUFBTyxLQUFhLEVBQUUsUUFBZ0I7UUFDbEMsSUFBTSxHQUFHLEdBQU0sSUFBSSxDQUFDLFFBQVEsY0FBVyxDQUFDO1FBQ3hDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQU8sR0FBRyxFQUFFLEVBQUMsS0FBSyxPQUFBLEVBQUUsUUFBUSxVQUFBLEVBQUMsQ0FBQyxDQUFDO0lBQ3hELENBQUM7SUFqQlUsV0FBVztRQUh2QixpQkFBVSxDQUFDO1lBQ1YsVUFBVSxFQUFFLE1BQU07U0FDbkIsQ0FBQzt5Q0FJMEIsaUJBQVU7T0FIekIsV0FBVyxDQWtCdkI7SUFBRCxrQkFBQztDQUFBLEFBbEJELElBa0JDO0FBbEJZLGtDQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtIdHRwQ2xpZW50fSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uL2h0dHBcIjtcbmltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSBcInJ4anNcIjtcblxuaW1wb3J0IHtVc2VyfSBmcm9tIFwifi9hcHAvQGNvcmUvbW9kZWxzL3VzZXJcIjtcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgQXV0aFNlcnZpY2Uge1xuICBwcml2YXRlIEJBU0VfVVJMID0gJ2h0dHA6Ly9sb2NhbGhvc3Q6MTMzNyc7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50KSB7IH1cblxuICBnZXRUb2tlbigpOnN0cmluZyB7XG4gICAgcmV0dXJuIGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpO1xuICB9XG5cbiAgbG9nSW4oZW1haWw6IHN0cmluZywgcGFzc3dvcmQ6IHN0cmluZyk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgY29uc3QgdXJsID0gYCR7dGhpcy5CQVNFX1VSTH0vbG9naW5gO1xuICAgIHJldHVybiB0aGlzLmh0dHAucG9zdDxVc2VyPih1cmwsIHtlbWFpbCwgcGFzc3dvcmR9KTtcbiAgfVxuXG4gIHNpZ25VcChlbWFpbDogc3RyaW5nLCBwYXNzd29yZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxVc2VyPiB7XG4gICAgICBjb25zdCB1cmwgPSBgJHt0aGlzLkJBU0VfVVJMfS9yZWdpc3RlcmA7XG4gICAgICByZXR1cm4gdGhpcy5odHRwLnBvc3Q8VXNlcj4odXJsLCB7ZW1haWwsIHBhc3N3b3JkfSk7XG4gIH1cbn1cbiJdfQ==