import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Article} from '../models/Article';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
articles: Article[];
utlA = 'http://localhost:3000/articles';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  constructor( private http: HttpClient) { }

  addArticle(article: Article): Observable<Article> {
    return this.http.post<Article>(this.utlA, article);
  }
  getAllArticles(): Observable<Article[]>{
    return this.http.get<Article[]>(this.utlA);
  }
  getArticleById(id: number): Observable<Article> {
    return this.http.get<Article>(this.utlA + '/' + id);
  }
  updateArticle(id: number, article: Article): Observable<Article> {
    return this.http.put<Article>(this.utlA + '/' + id, article, this.httpOptions);
  }
  deleteArticle(article: Article| number): Observable<Article> {
    const id = typeof article === 'number' ? article : article.id;
    const url = this.utlA + '/' + id;
    return this.http.delete<Article>(url);
  }
}
