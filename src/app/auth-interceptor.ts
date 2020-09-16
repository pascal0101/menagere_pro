import {
    HttpInterceptor,
    HttpRequest,
    HttpHandler
  } from "@angular/common/http";
  import { Injectable } from "@angular/core";
    
  @Injectable()
  export class AuthInterceptor implements HttpInterceptor {
    constructor() {}
  
    intercept(req: HttpRequest<any>, next: HttpHandler) {
        /* if(!window.localStorage.getItem('token'))  {
            alert('Veuillez vous connecter avant de continuer.');
        } */
        
        const authToken = window.localStorage.getItem('token');
        const authRequest = req.clone({
            headers: req.headers.set("Authorization", "jwt " + authToken)
        });
        return next.handle(authRequest);
    }
  }  