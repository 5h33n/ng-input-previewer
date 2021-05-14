import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgInputImgPreviewerComponent } from './ng-input-img-previewer.component';

describe('NgInputImgPreviewerComponent', () => {
  let component: NgInputImgPreviewerComponent;
  let fixture: ComponentFixture<NgInputImgPreviewerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgInputImgPreviewerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgInputImgPreviewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
