import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HousingListComponent } from './housing-list.component';

describe('HousingListComponent', () => {
  let component: HousingListComponent;
  let fixture: ComponentFixture<HousingListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HousingListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HousingListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
