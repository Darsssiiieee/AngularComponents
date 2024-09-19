import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmojiDescriptionComponent } from './emoji-description.component';

describe('EmojiDescriptionComponent', () => {
  let component: EmojiDescriptionComponent;
  let fixture: ComponentFixture<EmojiDescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EmojiDescriptionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmojiDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
