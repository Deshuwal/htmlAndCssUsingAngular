import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocMainSectionComponent } from './doc-main-section.component';

describe('DocMainSectionComponent', () => {
  let component: DocMainSectionComponent;
  let fixture: ComponentFixture<DocMainSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocMainSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DocMainSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
