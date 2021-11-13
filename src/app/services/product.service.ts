import { Injectable } from '@angular/core';
import { product } from '../models/product-model'

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private product: product[] = [
    {
      id: 1,
      name: 'manzanas',
      type: 'alimentos',
      stock: 30
    },
    {
      id: 2,
      name: 'cocinas',
      type: 'electrodomesticos',
      stock: 150
    },
    {
      id: 3,
      name: 'camiseta',
      type: 'ropa',
      stock: 11
    },
  ]

  getProduct(){
    return this.product;
  }

  addProduct(item:product){
    this.product.push(item);
  }

  updateProduct(product:product){
    let position = this.product.findIndex(item=>item.id == product.id)
    if(position != -1){
      this.product[position]={
        id:product.id,
        name:product.name,
        type:product.type,
        stock:product.stock
      }
    }
  }

  deleteProduct(product:product){
    let position = this.product.findIndex(item=>item.id == product.id)
    this.product.splice(position,1);
  }
}
