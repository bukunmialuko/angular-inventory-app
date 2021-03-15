import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDepartmantComponent } from './product-departmant.component';

describe('ProductDepartmantComponent', () => {
  let component: ProductDepartmantComponent;
  let fixture: ComponentFixture<ProductDepartmantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductDepartmantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductDepartmantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
