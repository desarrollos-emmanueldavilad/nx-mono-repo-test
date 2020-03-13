import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InicioshareComponent } from './inicioshare.component';

describe('InicioshareComponent', () => {
  let component: InicioshareComponent;
  let fixture: ComponentFixture<InicioshareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InicioshareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InicioshareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
