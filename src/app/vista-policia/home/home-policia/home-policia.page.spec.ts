import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomePoliciaPage } from './home-policia.page';

describe('HomePoliciaPage', () => {
  let component: HomePoliciaPage;
  let fixture: ComponentFixture<HomePoliciaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePoliciaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
