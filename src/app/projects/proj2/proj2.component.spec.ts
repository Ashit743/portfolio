import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Proj2Component } from './proj2.component';

describe('Proj2Component', () => {
  let component: Proj2Component;
  let fixture: ComponentFixture<Proj2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Proj2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Proj2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
