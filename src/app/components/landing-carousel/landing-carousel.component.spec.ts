import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LandingCarouselComponent } from './landing-carousel.component';

describe('LandingCarouselComponent', () => {
  let component: LandingCarouselComponent;
  let fixture: ComponentFixture<LandingCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LandingCarouselComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LandingCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize with currentIndex as 0', () => {
    expect(component.currentIndex).toBe(0);
  });

  it('should navigate to the next slide', () => {
    component.nextSlide();
    expect(component.currentIndex).toBe(1);
    component.nextSlide();
    expect(component.currentIndex).toBe(2);
    component.nextSlide();
    expect(component.currentIndex).toBe(0);
  });

  it('should navigate to the previous slide', () => {
    component.nextSlide();
    component.nextSlide();
    component.prevSlide();
    expect(component.currentIndex).toBe(1);
    component.prevSlide();
    expect(component.currentIndex).toBe(0);
    component.prevSlide();
    expect(component.currentIndex).toBe(2);
  });

});
