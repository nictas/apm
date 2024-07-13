import { Component, OnDestroy, OnInit } from "@angular/core";
import { IStar } from "../shared/star";
import { IProduct } from "./product";
import { ProductService } from "./product.service";
import { Subscription } from "rxjs";

@Component({
    selector: 'pm-products',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit, OnDestroy {
    pageTitle = "Product List";
    imageWidth = 50;
    imageMargin = 2;
    showImage = false;

    constructor(private productService: ProductService) { }

    private _listFilter = '';
    get listFilter(): string {
        return this._listFilter;
    }

    set listFilter(value: string) {
        this._listFilter = value;
        this.onListFilterChange(value);
    }

    products: IProduct[] = [];
    shownProducts = this.products;
    productsSubscription!: Subscription;

    ngOnInit(): void {
        this.productsSubscription = this.productService.getProducts().subscribe(receivedProducts => {
            this.products = receivedProducts;
            this.shownProducts = receivedProducts;
        });
    }

    ngOnDestroy(): void {
        this.productsSubscription.unsubscribe();
    }

    toggleImage(): void {
        this.showImage = !this.showImage;
    }

    onListFilterChange(listFilter: string): void {
        listFilter = listFilter.toLowerCase();
        this.shownProducts = this.products.filter((product: IProduct) => product.productName.toLowerCase().includes(listFilter));
    }

    onStarClicked(star: IStar) {
        this.pageTitle = `You submitted a rating ${star.index}/5. Note that this will have no effect since there's no connected backend.`;
    }
}
