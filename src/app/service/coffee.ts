import { Injectable } from "@angular/core";
import { Icoffee } from "../Models/coffee";


@Injectable({
    providedIn:'root'
})


export class coffeeService{
    products:Array<Icoffee> = [
        {
          name: 'Iced Caramel Latte',
          description: 'Smooth espresso with caramel and cold milk.',
          price: 199,
          image: 'assets/coffee2.png'
        },
        {
          name: 'Cappuccino',
          description: 'Classic cappuccino with rich foam and bold taste.',
          price: 169,
          image: 'assets/coffee4.png'
        },
        {
          name: 'Mocha',
          description: 'Espresso with chocolate and steamed milk.',
          price: 189,
          image: 'assets/coffee5.png'
        },
        {
          name: 'Espresso',
          description: 'Strong, bold and pure espresso shot.',
          price: 139,
          image: 'assets/coffee6.png'
        }
      ]

      getProducts(){
        return this.products;
        
      }

      
}