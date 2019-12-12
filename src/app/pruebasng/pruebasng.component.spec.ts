import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PruebasngComponent } from './pruebasng.component';

describe('PruebasngComponent', () => {
  let component: PruebasngComponent;
  let fixture: ComponentFixture<PruebasngComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PruebasngComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PruebasngComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
