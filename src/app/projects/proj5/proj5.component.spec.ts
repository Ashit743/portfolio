import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Proj5Component } from './proj5.component';

describe('Proj5Component', () => {
  let component: Proj5Component;
  let fixture: ComponentFixture<Proj5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Proj5Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Proj5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
