import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NavbarComponent } from './navbar.component';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { Location } from '@angular/common';
import { Component } from '@angular/core';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;
  let router: Router;
  let location: Location;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes([
          { path: 'products', component: DummyComponent },
          { path: 'recipes', component: DummyComponent },
        ]),
        NavbarComponent,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    location = TestBed.inject(Location);
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate to home and clear sessionStorage on logout', () => {
    spyOn(sessionStorage, 'clear');
    const navigateSpy = spyOn(router, 'navigate');

    component.logout();

    expect(sessionStorage.clear).toHaveBeenCalled();
    expect(navigateSpy).toHaveBeenCalledWith(['/']);
  });

  it('should navigate to the products route when products button is clicked', async () => {
    const productsButton = fixture.nativeElement.querySelector('.products-button');
    productsButton.click();
    fixture.detectChanges();

    await fixture.whenStable();
    expect(location.path()).toBe('/products');
  });

  it('should navigate to the recipes route when recipes button is clicked', async () => {
    const recipesButton = fixture.nativeElement.querySelector('.recipes-button');
    recipesButton.click();
    fixture.detectChanges();

    await fixture.whenStable();
    expect(location.path()).toBe('/recipes');
  });
});

@Component({
  template: ''
})
class DummyComponent { }
