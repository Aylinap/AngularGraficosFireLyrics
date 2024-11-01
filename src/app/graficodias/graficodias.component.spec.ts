import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficodiasComponent } from './graficodias.component';

describe('GraficodiasComponent', () => {
  let component: GraficodiasComponent;
  let fixture: ComponentFixture<GraficodiasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GraficodiasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GraficodiasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
