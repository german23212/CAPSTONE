import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PerfilCivilPage } from './perfil-civil.page';

describe('PerfilCivilPage', () => {
  let component: PerfilCivilPage;
  let fixture: ComponentFixture<PerfilCivilPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfilCivilPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
