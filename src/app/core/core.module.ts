import { NgModule }           from '@angular/core';
import { HTTP_INTERCEPTORS }  from '@angular/common/http';

import { HeadersInterceptor } from './interceptors/headers.interceptor';

/**
 * Service to intercept every HTTP Request
 * and admix general info into an HTTP Header
 *
 * https://angular.io/guide/ngmodule-faq#coremodule
 */
@NgModule({
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: HeadersInterceptor, multi: true }
  ]
})
export class CoreModule { }
