import {Component, OnInit} from '@angular/core';
import {ProductsService} from "../../services/products.service";
import {product} from "../../model/product.model";
import {Observable} from "rxjs";
import {Router} from "@angular/router";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  //products:product[]|null=null;
  products$:Observable<product[]> |null=null;
  constructor(private productService:ProductsService, private router:Router) { }

  ngOnInit(): void {
  }
  onGetAllProducts(){
    //this.productService.getAllProducts().subscribe(data=>{
      //this.products=data;
    this.products$=this.productService.getAllProducts();

  }
  onSelectedAllProducts(){
    this.products$=this.productService.getSelectedProducts();
  }

  onAvailableAllProducts(){
    this.products$=this.productService.getAvailableProducts();
  }

  onSearch(dataForm: any) {
    this.products$=this.productService.searchProducts(dataForm.keyword);

  }

  onSelect(p:product) {
    this.productService.select(p)
      .subscribe(data=>{p.selected=data.selected;});
  }

  onDelete(p:product) {
    let v=confirm("Etes vous sur??");
    if(v)
    this.productService.deleteProduct(p)
      .subscribe(this.onGetAllProducts)
  }

  onNewProducts() {
      this.router.navigateByUrl("/newProduct")
  }




  onUpdate(p:product) {
    this.router.navigateByUrl("/editProduct/"+p.id)
  }}
