import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MetalDetailsComponent } from './metal-details.component';

describe('MetalDetailsComponent', () => {
  let component: MetalDetailsComponent;
  let fixture: ComponentFixture<MetalDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MetalDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MetalDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
