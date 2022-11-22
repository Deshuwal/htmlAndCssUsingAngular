import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowcaseFormComponent } from './showcase-form.component';

describe('ShowcaseFormComponent', () => {
  let component: ShowcaseFormComponent;
  let fixture: ComponentFixture<ShowcaseFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowcaseFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowcaseFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
