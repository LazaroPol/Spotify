import { TestBed } from '@angular/core/testing';

import { PodcastserviceService } from './podcastservice.service';

describe('PodcastserviceService', () => {
  let service: PodcastserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PodcastserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
