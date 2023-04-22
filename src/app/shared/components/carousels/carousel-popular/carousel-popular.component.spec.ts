import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselPopularComponent } from './carousel-popular.component';

describe('CarouselPopularComponent', () => {
  let component: CarouselPopularComponent;
  let fixture: ComponentFixture<CarouselPopularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarouselPopularComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarouselPopularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
