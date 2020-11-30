import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursocComponent } from './cursoc.component';

describe('CursocComponent', () => {
  let component: CursocComponent;
  let fixture: ComponentFixture<CursocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CursocComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CursocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
