import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Proj3Component } from './proj3.component';

describe('Proj3Component', () => {
  let component: Proj3Component;
  let fixture: ComponentFixture<Proj3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Proj3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Proj3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
