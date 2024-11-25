import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PerfilPoliciaPage } from './perfil-policia.page';

describe('PerfilPoliciaPage', () => {
  let component: PerfilPoliciaPage;
  let fixture: ComponentFixture<PerfilPoliciaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfilPoliciaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
