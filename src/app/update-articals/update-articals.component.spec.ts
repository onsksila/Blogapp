import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateArticalsComponent } from './update-articals.component';

describe('UpdateArticalsComponent', () => {
  let component: UpdateArticalsComponent;
  let fixture: ComponentFixture<UpdateArticalsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateArticalsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateArticalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
