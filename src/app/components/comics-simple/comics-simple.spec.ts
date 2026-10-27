import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ComicsSimple } from './comics-simple';

describe('ComicsSimple', () => {
  let component: ComicsSimple;
  let fixture: ComponentFixture<ComicsSimple>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ComicsSimple],
    }).compileComponents();

    fixture = TestBed.createComponent(ComicsSimple);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
