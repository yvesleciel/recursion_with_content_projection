import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrowRigthComponent } from './arrow-rigth.component';

describe('ArrowRigthComponent', () => {
  let component: ArrowRigthComponent;
  let fixture: ComponentFixture<ArrowRigthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArrowRigthComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArrowRigthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
