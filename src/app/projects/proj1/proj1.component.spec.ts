import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Proj1Component } from './proj1.component';

describe('Proj1Component', () => {
  let component: Proj1Component;
  let fixture: ComponentFixture<Proj1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Proj1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Proj1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
