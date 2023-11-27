import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoftsSkillsComponent } from './softs-skills.component';

describe('SoftsSkillsComponent', () => {
  let component: SoftsSkillsComponent;
  let fixture: ComponentFixture<SoftsSkillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SoftsSkillsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SoftsSkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
