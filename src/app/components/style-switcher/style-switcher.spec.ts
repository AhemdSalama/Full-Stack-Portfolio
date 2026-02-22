import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StyleSwitcher } from './style-switcher';

describe('StyleSwitcher', () => {
  let component: StyleSwitcher;
  let fixture: ComponentFixture<StyleSwitcher>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StyleSwitcher]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StyleSwitcher);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
