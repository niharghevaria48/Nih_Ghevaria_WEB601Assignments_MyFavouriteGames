import { TestBed } from '@angular/core/testing';

import { FavouriteGamesServiceService } from './favourite-games-service.service';

describe('FavouriteGamesServiceService', () => {
  let service: FavouriteGamesServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FavouriteGamesServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
