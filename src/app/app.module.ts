import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';
import { ArticleDetailComponent } from './article-detail/article-detail.component';
import { ArticlesComponent } from './articles/articles.component';
import { HomepageComponent } from './homepage/homepage.component';

import { ArticleService } from './article.service';
import { SignUpComponent } from './sign-up/sign-up.component';
import { NavbarComponent } from './navbar/navbar.component';


@NgModule({
  declarations: [
    AppComponent,
    ArticleDetailComponent,
    ArticlesComponent,
    HomepageComponent,
    SignUpComponent,
    NavbarComponent
  ],
  imports: [
    SharedModule,
    BrowserModule,
    FormsModule, // <-- import the FormsModule before binding with [(ngModel)]
    HttpModule,
    AppRoutingModule
  ],
  providers: [ArticleService],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }
