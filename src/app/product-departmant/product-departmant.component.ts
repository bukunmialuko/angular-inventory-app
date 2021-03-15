import { Component, Input } from '@angular/core';
import { Product } from '../product.model';

@Component({
  selector: 'product-departmant',
  templateUrl: './product-departmant.component.html',
  styleUrls: ['./product-departmant.component.css']
})
export class ProductDepartmantComponent {
  @Input() product: Product;
}
