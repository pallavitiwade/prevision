import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { IProduct } from "../Models/coffee";



@Injectable({
    providedIn:'root'
})

export class cartService{
 
private cartSubject=new BehaviorSubject<IProduct[]>([]);
cart$=this.cartSubject.asObservable();

addtoCart(product:IProduct){
    const currentCart=this.cartSubject.value;

const alredyexit=currentCart.some(
    item=>item.id===product.id
);
if(!alredyexit){
    this.cartSubject.next([
        ...currentCart,
        product
    ]);
}

}
removeFromCart(id:string){
    const updateCart=this.cartSubject.value.filter(
        item=>item.id!==id
    );
    this.cartSubject.next(updateCart)
}

getCart(){
    return this.cartSubject.value
}


private count = 0;
  cartCount = new BehaviorSubject<number>(0);

  addCart() {
    this.count++;
    this.cartCount.next(this.count);
  }

  getCartCount() {
    return this.cartCount.asObservable();
  }

   
}