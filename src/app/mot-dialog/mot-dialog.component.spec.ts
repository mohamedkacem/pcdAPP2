import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MotDialogComponent } from './mot-dialog.component';

describe('MotDialogComponent', () => {
  let component: MotDialogComponent;
  let fixture: ComponentFixture<MotDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MotDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MotDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
