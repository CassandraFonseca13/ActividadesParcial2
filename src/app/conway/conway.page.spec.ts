import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Conway2Page } from './conway.page';

describe('Conway2Page', () => {
  let component: Conway2Page;
  let fixture: ComponentFixture<Conway2Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Conway2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
