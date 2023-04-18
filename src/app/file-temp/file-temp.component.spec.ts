import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FileTempComponent } from './file-temp.component';

describe('FileTempComponent', () => {
  let component: FileTempComponent;
  let fixture: ComponentFixture<FileTempComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FileTempComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FileTempComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
