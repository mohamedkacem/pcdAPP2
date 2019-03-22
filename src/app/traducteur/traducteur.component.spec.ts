import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TraducteurComponent } from './traducteur.component';

describe('TraducteurComponent', () => {
  let component: TraducteurComponent;
  let fixture: ComponentFixture<TraducteurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TraducteurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TraducteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
