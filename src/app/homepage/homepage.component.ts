import { Component, OnInit } from '@angular/core';

import { Article } from '../article';
import { ArticleService } from '../article.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  articles: Article[] = [];

  constructor(private articleService: ArticleService ) { }

  ngOnInit(): void {
    this.getLatestArticles();
  }

  getLatestArticles(): void {
    this.articleService.getArticles()
      .then(articles => this.articles = articles.slice(1, 5));
  }

}
