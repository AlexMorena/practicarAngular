import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PadreCompra } from './padre-compra';

describe('PadreCompra', () => {
  let component: PadreCompra;
  let fixture: ComponentFixture<PadreCompra>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PadreCompra],
    }).compileComponents();

    fixture = TestBed.createComponent(PadreCompra);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
