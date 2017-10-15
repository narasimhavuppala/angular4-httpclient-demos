import { HttpResponse } from '@angular/common/http/src/response';
import { HttpErrorResponse } from '@angular/common/http';
import { RestService } from './rest.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent {
  data: any;
 constructor(private service: RestService){

 }
 getData(){
  this.service.getData().subscribe(
   ( res: HttpResponse<any>) => {
     console.log(res);
      //this.data = data;
    },
    (err: HttpErrorResponse)  => {
      console.log(err);
      console.log(err);
    }

  );

 }
}
