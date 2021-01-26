import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyDashOrdersComponent } from './my-dash-orders.component';

describe('MyDashOrdersComponent', () => {
  let component: MyDashOrdersComponent;
  let fixture: ComponentFixture<MyDashOrdersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyDashOrdersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyDashOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
