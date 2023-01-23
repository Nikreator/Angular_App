import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms'
import { ModalService } from 'src/app/services/modal.service';
import { ProductsService } from 'src/app/services/products.service';
import { IProduct } from 'src/app/models/product';
import { NavigationComponent } from '../navigation/navigation.component';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.scss']
})

export class UpdateProductComponent implements OnInit {

  constructor(private productService: ProductsService,
    public modalService: ModalService,
    public navigationComponent: NavigationComponent) {
  }


  products: IProduct[] = this.productService.products
  currentProductId: number
  editMode: boolean = false
  currentProdId: string

  form = new FormGroup({
    title: new FormControl<any>(''),
    image: new FormControl<any>(''),
    price: new FormControl<any>(''),
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


  onEditClicked(id: string) {
    this.currentProdId = id
    console.log(this.currentProdId);
    let currentProduct = this.products.find(p => { return p.id.toString() === id });
    console.log(currentProduct);
    this.form.setValue({
      title: this.form.value.title,
      image: this.form.value.image,
      price: this.form.value.price
    })
    this.editMode = true

  }
  ngOnInit(): void {

  }

  submit(): void {
    if (!this.editMode) {
      this.productService.updateProducts(this.currentProdId, this.products)
    }

  }
}