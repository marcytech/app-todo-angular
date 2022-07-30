import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppCreateProjectComponent } from './app-create-project.component';

describe('AppCreateProjectComponent', () => {
  let component: AppCreateProjectComponent;
  let fixture: ComponentFixture<AppCreateProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppCreateProjectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppCreateProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
