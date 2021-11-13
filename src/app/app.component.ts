import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { product } from './models/product-model';
import { ProductService } from './services/product.service'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  displayedColumns: string[] =['id', 'name', 'type', 'stock', 'action'];
  title = 'productscompany';

  productList:product[] =[];
  dataSource: MatTableDataSource<any> = new MatTableDataSource<any>([]);
  productForm: FormGroup;
  productFormStatus: boolean;
  isNewProduct: boolean = false;
  
  newProduct: any = {};
  titleForm:string="New Product";
  constructor(
    private productSrv:ProductService,
    private fb:FormBuilder,
  ){

  }

  ngOnInit(){
    this.buildForm();
    this.getProduct();
  }

  getProduct(){
    this.productList = this.productSrv.getProduct();
    this.dataSource = new MatTableDataSource<product>(this.productSrv.getProduct());    
  }

  refreshData(){
    this.productList = this.productSrv.getProduct();
    this.dataSource.data = this.productSrv.getProduct();
  }

  buildForm(){
    this.productForm = this.fb.group({
      id: [''],
      name: [''],
      type: [''],
      stock: ['']
    })
  }

  addNewProduct(){
    this.productForm.reset();
    if (this.productList.length) {
      this.newProduct = {};
    }
    this.productFormStatus = true;
    this.isNewProduct = true;
    this.titleForm = "New Product";

  }

  removeProduct(item){
    this.productSrv.deleteProduct(item);
    this.refreshData()
  }

  updateProduct(item:product){
    this.productFormStatus = true;
    this.isNewProduct = false;
    this.titleForm = "Edit Product";
    this.productForm.setValue({
      id:item.id,
      name:item.name,
      type:item.type,
      stock:item.stock
    })
  }

  addProduct(){
    let product:product;

    if(this.productForm.valid){
      if (this.isNewProduct) {
        product = {
          id:this.productList.length+1,
          name:this.productForm.controls.name.value,
          type:this.productForm.controls.type.value,
          stock:parseInt(this.productForm.controls.stock.value)
        }
      }else{
        product = {
          id:this.productForm.controls.id.value,
          name:this.productForm.controls.name.value,
          type:this.productForm.controls.type.value,
          stock:parseInt(this.productForm.controls.stock.value)
        }
      }
    }
    this.saveProduct(product)
  }

  saveProduct(product:product){
    if (this.isNewProduct) {
      this.productSrv.addProduct(product);
      this.refreshData()
    }else{
      this.productSrv.updateProduct(product);
      this.refreshData()
    }
    
    
    this.productForm.reset();
    this.productFormStatus = false;
    this.isNewProduct = false;
  }

  cancelNewProduct(){
    this.productForm.reset();
    this.productFormStatus = false;
    this.isNewProduct = false;
  }
}