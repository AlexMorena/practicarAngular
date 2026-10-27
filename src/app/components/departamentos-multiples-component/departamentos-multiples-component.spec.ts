import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DepartamentosMultiplesComponent } from './departamentos-multiples-component';

describe('DepartamentosMultiplesComponent', () => {
  let component: DepartamentosMultiplesComponent;
  let fixture: ComponentFixture<DepartamentosMultiplesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DepartamentosMultiplesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DepartamentosMultiplesComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
