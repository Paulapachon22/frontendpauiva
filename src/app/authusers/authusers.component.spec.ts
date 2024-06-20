import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthusersComponent } from './authusers.component';

describe('AuthusersComponent', () => {
  let component: AuthusersComponent;
  let fixture: ComponentFixture<AuthusersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AuthusersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthusersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
