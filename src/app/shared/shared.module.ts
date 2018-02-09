import { NgModule }     from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }  from '@angular/forms';


/**
 * Module with shared components, directives, and pipes.
 *
 * https://angular.io/guide/ngmodule-faq#sharedmodule
 */
@NgModule({
  imports: [
    FormsModule,
    CommonModule
  ],
  declarations: [
  ],
  exports: [
    FormsModule,
    CommonModule
  ]
})
export class SharedModule { }
