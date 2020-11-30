import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GruposgComponent } from './gruposg.component';

describe('GruposgComponent', () => {
  let component: GruposgComponent;
  let fixture: ComponentFixture<GruposgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GruposgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GruposgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
