import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NameDetailComponent } from './name-detail.component';

describe('NameDetailComponent', () => {
  let component: NameDetailComponent;
  let fixture: ComponentFixture<NameDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NameDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NameDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
