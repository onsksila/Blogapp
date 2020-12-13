import { Component } from '@angular/core';
import {Article} from './models/Article';
import {ArticleService} from './shared/article.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Blog';
}
