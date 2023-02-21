import { Component, OnInit,  Output, EventEmitter } from '@angular/core';
import { AuthService } from '../auth.service/auth.service';
import { ProductsService } from '../products.service/products.service'

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit{
  products: any = [];


  constructor(private authService: AuthService, private productsService: ProductsService) { }

  ngOnInit(){
    this.showProductsDesayuno();
    console.log(this.products)
    //this.onClickMe2();
  }

  showProductsDesayuno() {
    this.productsService.showProducts().subscribe((data: any) => {
      let desayuno = data.filter((product: any) => product.type === "desayuno")

      //let showDesayuno = desayuno.map((des:any) => JSON.stringify(des))
      //console.log(showDesayuno);
      this.products = desayuno;
    });
    //this.router.navigateByUrl('/products')
  }

  showProductsComida() {
    this.productsService.showProducts().subscribe((data: any) => {
      let comida = data.filter((product: any) => product.type === "comida")
      //console.log(data)
      //let showDesayuno = desayuno.map((des:any) => JSON.stringify(des))
      //console.log(showDesayuno);
      this.products = comida;
    });
  }
  @Output() newItemEvent = new EventEmitter<number>();    
  onClickMe(comida: number) {
   //console.log(comida);
    this.newItemEvent.emit(comida);
    //this.productsService.getProductClick(comida);
      
    
  }
 
  onClickMe2() {
   // console.log(this.productsService.getProductItem()) 
    // this.productsService.getProductItem().then((productos)=>{
    //   console.log(productos);
    // })


    
  }

  
}
