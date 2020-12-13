import { Component, OnInit } from '@angular/core';
import {Article} from '../models/Article';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ArticleService} from '../shared/article.service';
import {ActivatedRoute, Route, Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-update-articals',
  templateUrl: './update-articals.component.html',
  styleUrls: ['./update-articals.component.css']
})
export class UpdateArticalsComponent implements OnInit {
  a: Article = new Article();
  myForm: FormGroup;
  fbuilder: FormBuilder = new FormBuilder();
  paramId: string;
  constructor(private ac: ActivatedRoute, private srA: ArticleService, private routerV: Router, private  toastr: ToastrService) { }
  ngOnInit(): void {
    this.myForm = this.fbuilder.group({
      id : ['', Validators.required],
      titre : ['', Validators.required],
      auteur :  ['', [Validators.required, Validators.pattern('[a-zA-Z]*')]],
      categorie : ['', [Validators.required, Validators.minLength(3)]],
      description : ['', [Validators.required, Validators.minLength(3)]]
    });
    this.ac.paramMap.subscribe(res => {
      this.paramId = res.get('id');
      this.srA.getArticleById(Number(res.get('id'))).subscribe(res => this.a = res);
    });
  }

  updateA(){
    this.srA.updateArticle(Number(this.paramId), this.a).subscribe(res => this.routerV.navigateByUrl('/Blog'));
    this.toastr.info('modification s est faite avec success', 'Done!');
  }
  get auteurA() { return this.myForm.get('auteur'); }
  get catA() { return this.myForm.get('categorie'); }
  get descA() { return this.myForm.get('description'); }



}
