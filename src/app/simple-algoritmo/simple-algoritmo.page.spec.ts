import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SimpleAlgoritmoPage } from './simple-algoritmo.page';

describe('SimpleAlgoritmoPage', () => {
  let component: SimpleAlgoritmoPage;
  let fixture: ComponentFixture<SimpleAlgoritmoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SimpleAlgoritmoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
