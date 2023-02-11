import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LessonlistComponent } from './lessonlist.component';

describe('LessonlistComponent', () => {
  let component: LessonlistComponent;
  let fixture: ComponentFixture<LessonlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LessonlistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LessonlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
