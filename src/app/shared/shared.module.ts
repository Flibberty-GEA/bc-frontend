import { NgModule }          from '@angular/core';
import { CommonModule }      from '@angular/common';
import { FormsModule }       from '@angular/forms';
import { TextareaComponent } from './components/textarea/textarea.component';

/**
 * Module with shared components, directives, and pipes.
 *
 * https://angular.io/guide/ngmodule-faq#sharedmodule
 */
@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    TextareaComponent
  ],
  declarations: [
  ],
  exports: [
    FormsModule,
    CommonModule,
    TextareaComponent
  ]
})
export class SharedModule { }
