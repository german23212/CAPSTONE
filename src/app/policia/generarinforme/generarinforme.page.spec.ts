import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GenerarinformePage } from './generarinforme.page';

describe('GenerarinformePage', () => {
  let component: GenerarinformePage;
  let fixture: ComponentFixture<GenerarinformePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(GenerarinformePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
