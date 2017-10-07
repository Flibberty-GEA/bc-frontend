import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Article } from '../article';
import { ArticleService} from '../article.service';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {

  articles: Article[];
  selectedArticle: Article;

  constructor(
    private router: Router,
    private articleService: ArticleService ) { }

  ngOnInit(): void {
    this.getArticles();
  }

  getArticles(): void {
    this.articleService.getArticles()
      .then(articles => this.articles = articles);
  }

  onSelect(article: Article): void {
    this.selectedArticle = article;
  }

  gotoDetail(): void {
    this.router.navigate(['/article', this.selectedArticle.id]);
  }

}
