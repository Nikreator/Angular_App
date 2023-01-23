import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { ModalService } from 'src/app/services/modal.service';
import { ProductsService } from 'src/app/services/products.service';
import { IProduct } from 'src/app/models/product';
import { NavigationComponent } from '../navigation/navigation.component';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.scss']
})

export class CreateProductComponent implements OnInit {

  constructor(private productService: ProductsService,
    public modalService: ModalService,
    public navigationComponent: NavigationComponent) {
  }


  products: IProduct[] = []


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

  }


  submit() {

    this.productService.create({
      // id:  this.products.id ,
      title: this.form.value.title as string,
      price: Number(this.form.value.price),
      description: 'lorem ipsum set',
      image: this.form.value.image as string,
      category: 'electronic',
      rating: {
        rate: 42,
        count: 1
      }
    }).subscribe(() => {

      this.modalService.close()


    })
  }

}

