import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocSideBarComponent } from './doc-side-bar.component';

describe('DocSideBarComponent', () => {
  let component: DocSideBarComponent;
  let fixture: ComponentFixture<DocSideBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocSideBarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DocSideBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
