import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutLoginPageComponent } from './layout-login-page.component';

describe('LayoutLoginPageComponent', () => {
  let component: LayoutLoginPageComponent;
  let fixture: ComponentFixture<LayoutLoginPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LayoutLoginPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LayoutLoginPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
