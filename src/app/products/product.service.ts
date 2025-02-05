import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, map, Observable, tap, throwError } from "rxjs";
import { IProduct } from "./product";

@Injectable({
    providedIn: "root"
})
export class ProductService {
    url = "/api/products.json";

    constructor(private httpClient: HttpClient) { }

    getProducts(): Observable<IProduct[]> {
        return this.httpClient.get<IProduct[]>(this.url).pipe(
            tap(data => console.log(`Received data: ${JSON.stringify(data)}`)),
            catchError(this.logError)
        );
    }

    getProduct(id: number): Observable<IProduct | undefined> {
        return this.getProducts().pipe(
            map((products: IProduct[]) => products.find((product: IProduct) => product.productId === id))
        );
    }

    private logError(e: HttpErrorResponse) {
        let errorMessage: string;
        if (e.error instanceof ErrorEvent) {
            errorMessage = `An error occurred: ${e.error.message}`;
        }
        else {
            errorMessage = `An error occurred while communicating with the server. Status code: ${e.status}, Message: ${e.message}`;
        }
        console.log(errorMessage);
        return throwError(() => errorMessage);
    }

}
