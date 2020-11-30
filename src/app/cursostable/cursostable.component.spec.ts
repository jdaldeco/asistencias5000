import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursostableComponent } from './cursostable.component';

describe('CursostableComponent', () => {
  let component: CursostableComponent;
  let fixture: ComponentFixture<CursostableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CursostableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CursostableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
