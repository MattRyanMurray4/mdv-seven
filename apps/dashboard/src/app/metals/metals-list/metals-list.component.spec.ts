import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MetalsListComponent } from './metals-list.component';

describe('MetalsListComponent', () => {
  let component: MetalsListComponent;
  let fixture: ComponentFixture<MetalsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MetalsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MetalsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
