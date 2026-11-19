import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Zabdiel } from './zabdiel';

describe('Zabdiel', () => {
  let component: Zabdiel;
  let fixture: ComponentFixture<Zabdiel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Zabdiel],
    }).compileComponents();

    fixture = TestBed.createComponent(Zabdiel);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
