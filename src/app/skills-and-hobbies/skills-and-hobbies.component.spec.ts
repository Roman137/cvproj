import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {SkillsAndHobbiesComponent} from './skills-and-hobbies.component';

describe('SkillsAndHobbiesComponent', () => {
  let component: SkillsAndHobbiesComponent;
  let fixture: ComponentFixture<SkillsAndHobbiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SkillsAndHobbiesComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillsAndHobbiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
