import { TestBed } from '@angular/core/testing';

import { NgInputImgPreviewerService } from './ng-input-img-previewer.service';

describe('NgInputImgPreviewerService', () => {
  let service: NgInputImgPreviewerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgInputImgPreviewerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
