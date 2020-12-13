import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ArticleService} from '../shared/article.service';
import {Article} from '../models/Article';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute} from '@angular/router';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.css']
})
export class FormulaireComponent implements OnInit {
  article: Article = new Article();
  @Output() newListeA = new EventEmitter<Article[]>();
  constructor(private srA: ArticleService, private http: HttpClient, private ac: ActivatedRoute, private  toastr: ToastrService) { }
  ngOnInit(): void {
  }
    addArticle(){
    this.srA.addArticle(this.article).subscribe(next => this.srA.getAllArticles().subscribe(res => this.newListeA.emit(res)));
    this.article = new Article();
    this.toastr.success('Article added successfully', 'Done!');

    }
}
