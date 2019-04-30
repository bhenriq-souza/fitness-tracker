import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppSideNavListComponent } from './app-sidenav-list.component';

describe('AppSideNavListComponent', () => {
  let component: AppSideNavListComponent;
  let fixture: ComponentFixture<AppSideNavListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppSideNavListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppSideNavListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
