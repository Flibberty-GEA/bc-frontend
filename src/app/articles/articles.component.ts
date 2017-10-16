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

  add(title: string, content: string): void {
    title = title.trim();
    content = content.trim();
    if (!title || !content) { return; }
    this.articleService.create(title, content)
      .then(article => {
        this.articles.push(article);
        this.articleService = null;
      });
  }

  delete(article: Article): void {
    this.articleService
      .delete(article.id)
      .then(() => {
        this.articles = this.articles.filter(a => a !== article);
        if (this.selectedArticle === article) { this.selectedArticle = null; }
      });
  }
}
