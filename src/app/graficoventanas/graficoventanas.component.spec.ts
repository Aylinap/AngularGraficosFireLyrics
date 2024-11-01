import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficoventanasComponent } from './graficoventanas.component';

describe('GraficoventanasComponent', () => {
  let component: GraficoventanasComponent;
  let fixture: ComponentFixture<GraficoventanasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GraficoventanasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GraficoventanasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
