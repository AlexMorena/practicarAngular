import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PadreVotacion } from './padre-votacion';

describe('PadreVotacion', () => {
  let component: PadreVotacion;
  let fixture: ComponentFixture<PadreVotacion>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PadreVotacion],
    }).compileComponents();

    fixture = TestBed.createComponent(PadreVotacion);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
