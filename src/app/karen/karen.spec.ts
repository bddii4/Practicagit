import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Karen } from './karen';

describe('Karen', () => {
  let component: Karen;
  let fixture: ComponentFixture<Karen>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Karen],
    }).compileComponents();

    fixture = TestBed.createComponent(Karen);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
