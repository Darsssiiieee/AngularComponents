import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostWatchAnimeComponent } from './most-watch-anime.component';

describe('MostWatchAnimeComponent', () => {
  let component: MostWatchAnimeComponent;
  let fixture: ComponentFixture<MostWatchAnimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MostWatchAnimeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MostWatchAnimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
