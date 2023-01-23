import { Component, OnInit } from '@angular/core';
import { NavigationComponent } from 'src/app/components/navigation/navigation.component';
import { IProduct } from 'src/app/models/product';
import { ModalService } from 'src/app/services/modal.service';
import { ModalUpdateService } from 'src/app/services/modal-update.service ';

import { ProductsService } from 'src/app/services/products.service';
import { CreateProductComponent } from 'src/app/components/create-product/create-product.component';
@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss']
})
export class ProductPageComponent implements OnInit {
  title = 'My angular app for training';
  loading = false
  // products$: Observable<IProduct[]>
  term = ''



  constructor(
    public productsService: ProductsService,
    public modalService: ModalService,
    public modalUpdateService: ModalUpdateService,
    public navigationComponent: NavigationComponent,
  ) {

  }

  ngOnInit(): void {
    this.loading = true
    // this.products$ = this.productsService.getAll().pipe(tap(() => this.loading = false))
    this.productsService.getAll().subscribe(() => {
      this.loading = false
    })
  }
}
