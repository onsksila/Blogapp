import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Article} from '../models/Article';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  @Input() article: Article;
  @Output() del = new EventEmitter();
  @Output() up = new EventEmitter();

  constructor() {
  }

  ngOnInit(): void {
  }

  delA(a: Article) {
    this.del.emit(a);
  }

}
