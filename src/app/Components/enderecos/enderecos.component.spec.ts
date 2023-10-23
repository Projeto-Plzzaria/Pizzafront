import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnderecosComponent } from './enderecos.component';

describe('EnderecosComponent', () => {
  let component: EnderecosComponent;
  let fixture: ComponentFixture<EnderecosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EnderecosComponent]
    });
    fixture = TestBed.createComponent(EnderecosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
