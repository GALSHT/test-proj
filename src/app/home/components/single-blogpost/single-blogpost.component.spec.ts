import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleBlogpostComponent } from './single-blogpost.component';

describe('SingleBlogpostComponent', () => {
  let component: SingleBlogpostComponent;
  let fixture: ComponentFixture<SingleBlogpostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleBlogpostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleBlogpostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
