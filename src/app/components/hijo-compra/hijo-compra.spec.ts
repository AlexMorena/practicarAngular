import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HijoCompra } from './hijo-compra';

describe('HijoCompra', () => {
  let component: HijoCompra;
  let fixture: ComponentFixture<HijoCompra>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HijoCompra],
    }).compileComponents();

    fixture = TestBed.createComponent(HijoCompra);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
