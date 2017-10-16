import { Injectable } from '@angular/core';
import { Article } from './article';

import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';


@Injectable()
export class ArticleService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private articlesUrl = 'http://localhost:8080/article';  // URL to web api

  constructor(private http: Http) { }

  getArticles(): Promise<Article[]> {
  return this.http.get(this.articlesUrl)
    .toPromise()
    .then(response => (response.json() as Article[]))
    .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

  getArticle(id: number): Promise<Article> {
    const url = `${this.articlesUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json() as Article)
      .catch(this.handleError);
  }

  update(article: Article): Promise<Article> {
    const url = `${this.articlesUrl}/${article.id}`;
    return this.http
      .put(url, JSON.stringify(article), {headers: this.headers})
      .toPromise()
      .then(() => article)
      .catch(this.handleError);
  }

  create(title: string, content: string): Promise<Article> {
    return this.http
      .post(this.articlesUrl, JSON.stringify({title: title, content: content}), {headers: this.headers})
      .toPromise()
      .then(res => res.json().data as Article)
      .catch(this.handleError);
  }

  delete(id: number): Promise<void> {
    const url = `${this.articlesUrl}/${id}`;
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

}
