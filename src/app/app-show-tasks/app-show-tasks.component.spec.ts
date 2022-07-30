import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppShowTasksComponent } from './app-show-tasks.component';

describe('AppShowTasksComponent', () => {
  let component: AppShowTasksComponent;
  let fixture: ComponentFixture<AppShowTasksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppShowTasksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppShowTasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
