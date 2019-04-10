import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TymformComponent } from './tymform.component';

describe('TymformComponent', () => {
  let component: TymformComponent;
  let fixture: ComponentFixture<TymformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TymformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TymformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
