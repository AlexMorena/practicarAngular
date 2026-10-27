import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HijoVotacion } from './hijo-votacion';

describe('HijoVotacion', () => {
  let component: HijoVotacion;
  let fixture: ComponentFixture<HijoVotacion>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HijoVotacion],
    }).compileComponents();

    fixture = TestBed.createComponent(HijoVotacion);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
