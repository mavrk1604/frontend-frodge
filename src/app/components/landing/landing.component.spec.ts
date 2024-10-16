import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LandingComponent } from './landing.component';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { of, throwError } from 'rxjs';

describe('LandingComponent', () => {
  let component: LandingComponent;
  let fixture: ComponentFixture<LandingComponent>;
  let authServiceMock: jasmine.SpyObj<AuthService>;
  let routerMock: jasmine.SpyObj<Router>;

  beforeEach(async () => {
    authServiceMock = jasmine.createSpyObj('AuthService', ['register', 'login']);
    routerMock = jasmine.createSpyObj('Router', ['navigate']);

    await TestBed.configureTestingModule({
      providers: [
        { provide: AuthService, useValue: authServiceMock },
        { provide: Router, useValue: routerMock },
        LandingComponent
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(LandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should toggle isRegisterMode and isLoginMode', () => {
    const initialRegisterMode = component.isRegisterMode;
    const initialLoginMode = component.isLoginMode;

    component.toggleMode();

    expect(component.isRegisterMode).toBe(!initialRegisterMode);
    expect(component.isLoginMode).toBe(!initialLoginMode);
  });

  it('should call register method from AuthService on registerUser', () => {
    component.email = 'test@example.com';
    component.password = 'password';
    const mockResponse = { id: 1, token: 'mock-token' };
    authServiceMock.register.and.returnValue(of(mockResponse));

    component.registerUser();

    expect(authServiceMock.register).toHaveBeenCalledWith(component.email, component.password);
  });

  it('should log error if registerUser fails', () => {
    component.email = 'test@example.com';
    component.password = 'password';
    const errorResponse = { message: 'Error occurred' };
    authServiceMock.register.and.returnValue(throwError(() => errorResponse));

    spyOn(console, 'log');

    component.registerUser();

    expect(console.log).toHaveBeenCalledWith(errorResponse);
  });

  it('should call login method from AuthService on loginUser', () => {
    component.email = 'test@example.com';
    component.password = 'password';
    const mockResponse = { id: 1, token: 'mock-token' };
    authServiceMock.login.and.returnValue(of(mockResponse));

    component.loginUser();

    expect(authServiceMock.login).toHaveBeenCalledWith(component.email, component.password);
  });

  it('should navigate to /products on successful login', () => {
    component.email = 'test@example.com';
    component.password = 'password';
    const mockResponse = { id: 1, token: 'mock-token' };
    authServiceMock.login.and.returnValue(of(mockResponse));

    component.loginUser();

    expect(sessionStorage.getItem("id")).toEqual('1');
    expect(sessionStorage.getItem("token")).toEqual('mock-token');
    expect(routerMock.navigate).toHaveBeenCalledWith(['/products']);
  });

  it('should log error if loginUser fails', () => {
    component.email = 'test@example.com';
    component.password = 'password';
    const errorResponse = { message: 'Error occurred' };
    authServiceMock.login.and.returnValue(throwError(() => errorResponse));

    spyOn(console, 'log');

    component.loginUser();

    expect(console.log).toHaveBeenCalledWith(errorResponse);
  });
  it('should toggle between register and login mode', () => {
    component.isRegisterMode = true;
    component.toggleMode();
    expect(component.isRegisterMode).toBe(false);

    component.toggleMode();
    expect(component.isRegisterMode).toBe(true);
  });

  it('should call registerUser on form submission', () => {
    spyOn(component, 'registerUser');
    component.isRegisterMode = true;
    fixture.detectChanges();

    const form = fixture.nativeElement.querySelector('.register-primary');
    form.dispatchEvent(new Event('ngSubmit'));

    expect(component.registerUser).toHaveBeenCalled();
  });

  it('should call loginUser on form submission', () => {
    spyOn(component, 'loginUser');
    component.isRegisterMode = false;
    fixture.detectChanges();

    const form = fixture.nativeElement.querySelector('.login-primary');
    form.dispatchEvent(new Event('ngSubmit'));

    expect(component.loginUser).toHaveBeenCalled();
  });

  it('should bind email and password inputs correctly', () => {
    const emailInput = fixture.nativeElement.querySelector('.email-input');
    const passwordInput = fixture.nativeElement.querySelector('.password-input');

    emailInput.value = 'test@example.com';
    passwordInput.value = 'password123';
    emailInput.dispatchEvent(new Event('input'));
    passwordInput.dispatchEvent(new Event('input'));

    expect(component.email).toBe('test@example.com');
    expect(component.password).toBe('password123');
  });
});
