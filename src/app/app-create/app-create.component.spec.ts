import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppCreateComponent } from './app-create.component';

describe('AppCreateComponent', () => {
  let component: AppCreateComponent;
  let fixture: ComponentFixture<AppCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
