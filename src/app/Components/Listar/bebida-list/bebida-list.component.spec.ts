import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BebidaListComponent } from './bebida-list.component';

describe('BebidaListComponent', () => {
  let component: BebidaListComponent;
  let fixture: ComponentFixture<BebidaListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BebidaListComponent]
    });
    fixture = TestBed.createComponent(BebidaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
