import { Component, ChangeDetectorRef, Input, OnInit, AfterViewInit } from "@angular/core";
import { IProduct } from "src/app/models/product";
import { ProductsService } from "src/app/services/products.service";
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { ModalService } from "src/app/services/modal.service";
import { ModalUpdateService } from "src/app/services/modal-update.service ";
import { NavigationComponent } from "../navigation/navigation.component";
import { UpdateProductComponent } from "../update-product/update-product.component";


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html'
})

export class ProductComponent implements OnInit, AfterViewInit {



  constructor(public productsService: ProductsService,
    public modalService: ModalService,
    public productService: ProductsService,
    public modalUpdateService: ModalUpdateService,
    public navigationComponent: NavigationComponent,
    public updateProductComponent: UpdateProductComponent) {

  }

  products: IProduct[] = []
  loading = false
  @Input() product: IProduct
  details = false
  submit = false
  isVisible = false

  form = new FormGroup({
    title: new FormControl<string>('', [
      Validators.required,
      Validators.minLength(6)
    ]),
    image: new FormControl<string>('', [
      Validators.required,
      Validators.minLength(6)
    ]),
    price: new FormControl<string>('', [
      Validators.required,
      Validators.minLength(2)
    ]),
  })

  get title() {
    return this.form.controls.title as FormControl
  }

  get image() {
    return this.form.controls.image as FormControl
  }

  get price() {
    return this.form.controls.price as FormControl
  }

  ngOnInit(): void {
    this.loading
  }

  ngAfterViewInit(): void {

  }





  delete(product: IProduct) {
    this.productsService.delete(product).subscribe(data => {
      this.submit = true
      this.isVisible = true
      console.log(data);

    })
  }



}
