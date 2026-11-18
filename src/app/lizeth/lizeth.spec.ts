import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lizeth } from './lizeth';

describe('Lizeth', () => {
  let component: Lizeth;
  let fixture: ComponentFixture<Lizeth>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lizeth],
    }).compileComponents();

    fixture = TestBed.createComponent(Lizeth);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
