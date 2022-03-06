import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {product} from "../model/product.model";
@Injectable({providedIn:"root"})
export class ProductsService{
  constructor(private http:HttpClient){

  }
  getAllProducts():Observable<product[]>{
    let host=environment.host;
    return this.http.get<product[]>(host+"/products");
  }
  getSelectedProducts():Observable<product[]>{
    let host=environment.host;
    return this.http.get<product[]>(host+"/products?selected=true");
  }
  getAvailableProducts():Observable<product[]>{
    let host=environment.host;
    return this.http.get<product[]>(host+"/products?available=true");
  }
  searchProducts(keyword:string):Observable<product[]>{
    let host=environment.host;
    return this.http.get<product[]>(host+"/products?name_like="+keyword);
  }
  select(product:product):Observable<product>{
    let host=environment.host;
    product.selected=!product.selected;     /** if the product isn't selected */
    return this.http.put<product>(host+"/products/"+product.id,product);
  }
  deleteProduct(product:product):Observable<void>{
    let host=environment.host;
    product.selected=!product.selected;     /** if the product isn't selected */
    return this.http.delete<void>(host+"/products/"+product.id);
  }
  saveProduct(product:product):Observable<product>{
    let host=environment.host;

    return this.http.post<product>(host+"/products",product);
  }

  getProducts(id:number):Observable<product>{
    let host=environment.host;
    return this.http.get<product>(host+"/products/"+id);
  }

  UpdateProduct(product:product):Observable<product>{
    let host=environment.host;
    return this.http.put<product>(host+"/products/"+product.id,product);
  }
}
