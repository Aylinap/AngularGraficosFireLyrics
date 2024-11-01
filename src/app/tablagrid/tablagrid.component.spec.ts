import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablagridComponent } from './tablagrid.component';

describe('TablagridComponent', () => {
  let component: TablagridComponent;
  let fixture: ComponentFixture<TablagridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TablagridComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TablagridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
