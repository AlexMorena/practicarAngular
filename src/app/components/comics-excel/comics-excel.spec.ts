import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ComicsExcel } from './comics-excel';

describe('ComicsExcel', () => {
  let component: ComicsExcel;
  let fixture: ComponentFixture<ComicsExcel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ComicsExcel],
    }).compileComponents();

    fixture = TestBed.createComponent(ComicsExcel);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
