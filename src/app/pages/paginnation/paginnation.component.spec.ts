import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginnationComponent } from './paginnation.component';

describe('PaginnationComponent', () => {
  let component: PaginnationComponent;
  let fixture: ComponentFixture<PaginnationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginnationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginnationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
