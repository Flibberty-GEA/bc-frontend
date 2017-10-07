import { Injectable } from '@angular/core';
import { Article } from './article';
import { ARTICLES } from './mock-articles';

@Injectable()
export class ArticleService {

  constructor() { }

  getArticles(): Promise<Article[]> {
    return Promise.resolve(ARTICLES);
  }

  getArticle(id: number): Promise<Article> {
    return this.getArticles()
      .then(articles => articles
        .find(article => article.id === id));
  }

}
