import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReportePoliciaPage } from './reporte-policia.page';

describe('ReportePoliciaPage', () => {
  let component: ReportePoliciaPage;
  let fixture: ComponentFixture<ReportePoliciaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportePoliciaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
