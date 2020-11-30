import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrupostableComponent } from './grupostable.component';

describe('GrupostableComponent', () => {
  let component: GrupostableComponent;
  let fixture: ComponentFixture<GrupostableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GrupostableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GrupostableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
