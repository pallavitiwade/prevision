import { Component, OnInit } from '@angular/core';
import { cartService } from 'src/app/service/cart';
import { menuService } from 'src/app/service/menu';
import { SnackBarService } from 'src/app/service/snackbar';
import { IProduct } from 'src/app/Models/coffee';

// interface CartItem {
//  id: string;
//   name: string;
//   category: string;
//   price: number;
//   image: string;
//   quantity: number;
 

// }

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  products: IProduct[] = [];

  constructor(

     private cartSer: cartService,
         private _menus:menuService,
             private snackbar: SnackBarService
         
     
  ) { }

  ngOnInit(): void {
     this.cartSer.cart$.subscribe(
      (items) => {
        this.products = items;
      }
    );
  }

  removeItem(id: string) {

    this.cartSer.removeFromCart(id);

  }

   getAddProduct(){
    this._menus.getProducts().subscribe((data:any)=>{
      this.products=Object.keys(data || {}).map(key=>({
        id:key,
        ...data[key]
      }));
      console.log(this.products)
    })
  }

  deleteCard(id:string){
     console.log('delete',id);

    this._menus.deleteproduct(id).subscribe({
      next:()=>{
        console.log('product is deleted')
      this.snackbar.show('coffee removed from Cart succesfully !!!')

      },
       error:(error)=>{
      console.log('delete',error);
     }

  });
  
}

// promoCode: string = '';

//   discount: number = 50;

//   delivery: number = 0;


//   // Increase quantity
//   increaseQuantity(item: CartItem): void {
//     item.quantity++;
//   }

//   // Decrease quantity
//   decreaseQuantity(item: CartItem): void {

//     if (item.quantity > 1) {
//       item.quantity--;
//     }
//   }

//   // Delete item
//   removeItems(id: string): void {

//     this.products = this.products.filter(item => item.id !== id);

//   }

//   // Calculate subtotal
//   get subtotal(): number {

//     return this.products.reduce(
//       (total, item) => total + (item.price * item.quantity),
//       0
//     );

//   }

//   // Calculate total
//   get total(): number {

//     return this.subtotal - this.discount + this.delivery;

//   }

//   applyPromo(): void {

//     if (this.promoCode === 'COFFEE10') {
//       this.discount = 160;
//     } else {
//       this.discount = 0;
//     }

//   }

//   checkout(): void {

//     alert('Proceeding to checkout');

//   }

}



