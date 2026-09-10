import { Injectable } from "@angular/core";
import { IProduct } from "../Models/coffee";


@Injectable({
    providedIn:'root'
})


export class coffeeService{

 MenuArr:Array<IProduct>=[
  {
          id:'1',
      name: 'Iced Caramel Latte',
      description: 'Smooth espresso with caramel and cold milk.',
      price: 199,
      image: 'https://images.unsplash.com/photo-1610632380989-680fe40816c6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvZmZlZXxlbnwwfHwwfHx8MA%3D%3D',
  },
  {
          id:'2',
      name: 'Cappuccino',
      description: 'Classic cappuccino with rich foam and bold taste.',
      price: 169,
      image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGNvZmZlZXxlbnwwfHwwfHx8MA%3D%3D',
  },
  {
          id:'3',
      name: 'Espresso',
      description: 'Strong and aromatic espresso with a rich crema.',
      price: 129,
      image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGNvZmZlZXxlbnwwfHwwfHx8MA%3D%3D',
  },
  {
      id:'4',
      name: 'Cafe Latte',
      description: 'Smooth espresso blended with creamy steamed milk.',
      price: 179,
      image: 'https://plus.unsplash.com/premium_photo-1671559021551-95106555ee19?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTJ8fGNvZmZlZXxlbnwwfHwwfHx8MA%3D%3D',
  }
   


]

pro():IProduct[]{
    return this.MenuArr
}

}
   

      
