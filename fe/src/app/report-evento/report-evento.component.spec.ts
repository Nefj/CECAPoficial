import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportEventoComponent } from './report-evento.component';

describe('ReportEventoComponent', () => {
  let component: ReportEventoComponent;
  let fixture: ComponentFixture<ReportEventoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportEventoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportEventoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
