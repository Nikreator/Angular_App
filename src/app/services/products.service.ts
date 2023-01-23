import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse, HttpParams } from "@angular/common/http";
import { catchError, delay, Observable, retry, subscribeOn, tap, throwError } from "rxjs";
import { IProduct } from "../models/product";
import { ErrorService } from "./error.service";



@Injectable({
    "providedIn": "root"
})

export class ProductsService {


    constructor(private http: HttpClient,
        private errorService: ErrorService
    ) {
    }

    products: IProduct[] = []
    isVisible$ = true

    getAll(): Observable<IProduct[]> {

        return this.http.get<IProduct[]>('https://fakestoreapi.com/products').pipe(
            delay(200),
            retry(2),
            tap(products => this.products = products),
            catchError(this.errorHandeler.bind(this)),

        )
    }

    private errorHandeler(error: HttpErrorResponse) {
        this.errorService.handle(error.message)
        return throwError(() => error.message)
    }

    create(product: IProduct) {
        console.log(product.id);
        return this.http.post<IProduct>(`https://fakestoreapi.com/products/`, product)
            .pipe(
                tap(prod => this.products.splice(0, 0, prod)),
            )

    }

    delete(product: IProduct) {
        return this.http.delete<IProduct>(`https://fakestoreapi.com/products/${product.id}`)
            .pipe(
                tap(prod => this.products.slice(prod.id))
            )
    }


    sortProductByPrice(products: IProduct[]) {
        this.isVisible$ = false
        return products.sort((a, b) => Number(a.price) - Number(b.price));
    }

    updateProducts(id: string, data: IProduct[]) {
        return this.http.put<IProduct>('https://fakestoreapi.com/products/' + id, data)
            .subscribe();

    }

}