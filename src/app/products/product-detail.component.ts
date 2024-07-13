import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from './product';
import { ProductService } from './product.service';
import { Subscription } from 'rxjs';

@Component({
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent implements OnInit, OnDestroy {
  pageTitle = 'Product Detail';
  product: IProduct | undefined;
  productSubscription!: Subscription;

  constructor(private route: ActivatedRoute, private router: Router,
    private productService: ProductService) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.pageTitle += `: ${id}`;
    this.productSubscription = this.productService.getProduct(id).subscribe(product => {
      this.product = product;
    });
  }

  ngOnDestroy(): void {
    this.productSubscription.unsubscribe();
  }

  onBack(): void {
    this.router.navigate(['/products']);
  }

}
