import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InfinitescrollaPage } from './infinitescrolla.page';

describe('InfinitescrollaPage', () => {
  let component: InfinitescrollaPage;
  let fixture: ComponentFixture<InfinitescrollaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(InfinitescrollaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
