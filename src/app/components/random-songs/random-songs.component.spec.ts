import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomSongsComponent } from './random-songs.component';

describe('RandomSongsComponent', () => {
  let component: RandomSongsComponent;
  let fixture: ComponentFixture<RandomSongsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RandomSongsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RandomSongsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
