import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeCivilPage } from './home-civil.page';

describe('HomeCivilPage', () => {
  let component: HomeCivilPage;
  let fixture: ComponentFixture<HomeCivilPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeCivilPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
