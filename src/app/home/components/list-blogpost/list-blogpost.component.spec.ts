import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListBlogpostComponent } from './list-blogpost.component';

describe('ListBlogpostComponent', () => {
  let component: ListBlogpostComponent;
  let fixture: ComponentFixture<ListBlogpostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListBlogpostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListBlogpostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
