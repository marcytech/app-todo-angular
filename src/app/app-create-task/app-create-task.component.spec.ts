import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppCreateTaskComponent } from './app-create-task.component';

describe('AppCreateTaskComponent', () => {
  let component: AppCreateTaskComponent;
  let fixture: ComponentFixture<AppCreateTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppCreateTaskComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppCreateTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
