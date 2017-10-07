import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';

import 'rxjs/add/operator/switchMap';

import { Article } from '../article';
import { ArticleService} from '../article.service';

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.css']
})
export class ArticleDetailComponent implements OnInit {

  constructor(
    private articleService: ArticleService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  article: Article;

  ngOnInit(): void {
    this.route.paramMap
      .switchMap((params: ParamMap) => this.articleService.getArticle(+params.get('id')))
      .subscribe(article => this.article = article);
  }

  goBack(): void {
    this.location.back();
  }

}
