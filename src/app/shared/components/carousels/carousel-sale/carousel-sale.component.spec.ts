import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselSaleComponent } from './carousel-sale.component';

describe('CarouselSaleComponent', () => {
  let component: CarouselSaleComponent;
  let fixture: ComponentFixture<CarouselSaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarouselSaleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarouselSaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
