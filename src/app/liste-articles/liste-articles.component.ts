import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ArticleService} from '../shared/article.service';
import {Article} from '../models/Article';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-liste-articles',
  templateUrl: './liste-articles.component.html',
  styleUrls: ['./liste-articles.component.css']
})
export class ListeArticlesComponent implements OnInit {
  articles: Article[];
  term: string;
  constructor(private srA: ArticleService, private  toastr: ToastrService) { }

  ngOnInit(): void {
this.srA.getAllArticles().subscribe(res => this.articles = res);
  }

  suppA(a: Article){
    this.srA.deleteArticle(a).subscribe(next => this.srA.getAllArticles().subscribe(res => this.articles = res));
    this.toastr.error('Article successfully deleted', 'Done!');
  }

  updateListe(list: Article[]){
    this.articles = list;
  }

}
