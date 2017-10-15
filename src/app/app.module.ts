import { HttpModule } from '@angular/http';

import { MyInterceptor } from './myinterceptor';
import { RestService } from './rest.service';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NoopInterceptor } from '@angular/common/http/src/interceptor';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [RestService,
    [{
    provide: HTTP_INTERCEPTORS,
    useClass: MyInterceptor,
    multi: true
  }]],
  bootstrap: [AppComponent]
})
export class AppModule { }
