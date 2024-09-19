import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeparationarrayComponent } from './separationarray.component';

describe('SeparationarrayComponent', () => {
  let component: SeparationarrayComponent;
  let fixture: ComponentFixture<SeparationarrayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SeparationarrayComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeparationarrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
