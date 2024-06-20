import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InmueblesventasComponent } from './inmueblesventas.component';

describe('InmueblesventasComponent', () => {
  let component: InmueblesventasComponent;
  let fixture: ComponentFixture<InmueblesventasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InmueblesventasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InmueblesventasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
