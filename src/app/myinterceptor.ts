import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { HttpResponse } from '@angular/common/http';
import 'rxjs/add/operator/do';
export class MyInterceptor implements HttpInterceptor{
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        console.log('Request in Interceptor' + req);
        
       const started = Date.now();
        return next
          .handle(req)
          .do(event => {
            if (event instanceof HttpResponse) {
             const elapsed = Date.now() - started;
              console.log('Received Response in MS ' + elapsed);
            }
          });
    }

}
