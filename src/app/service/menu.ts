import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, of } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { IProduct } from "../Models/coffee";


@Injectable({
    providedIn:'root'
})

export class menuService{
//    MenuArr:Array<Imenu>=[
//   {id:'1',
//     name: 'Iced Caramel Latte',
//     description: 'Smooth espresso with caramel and cold milk.',
//     price: 199,
//     image: 'https://images.unsplash.com/photo-1610632380989-680fe40816c6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvZmZlZXxlbnwwfHwwfHx8MA%3D%3D'
//   },
//   {id:'2',
//     name: 'Cappuccino',
//     description: 'Classic cappuccino with rich foam and bold taste.',
//     price: 169,
//     image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGNvZmZlZXxlbnwwfHwwfHx8MA%3D%3D'
//   },
//   {id:'3',
//     name: 'Espresso',
//     description: 'Strong and aromatic espresso with a rich crema.',
//     price: 129,
//     image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGNvZmZlZXxlbnwwfHwwfHx8MA%3D%3D'
//   },
//   {id:'4',
//     name: 'Cafe Latte',
//     description: 'Smooth espresso blended with creamy steamed milk.',
//     price: 179,
//     image: 'https://plus.unsplash.com/premium_photo-1671559021551-95106555ee19?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTJ8fGNvZmZlZXxlbnwwfHwwfHx8MA%3D%3D'
//   },
//   {id:'5',
//     name: 'Mocha',
//     description: 'Rich chocolate combined with espresso and steamed milk.',
//     price: 189,
//     image: 'assets/coffee5.png'
//   },
//   {id:'6',
//     name: 'Cold Coffee',
//     description: 'Chilled creamy coffee blended with milk and ice.',
//     price: 159,
//     image: 'https://media.istockphoto.com/id/2174862067/photo/coffee-cup-and-coffee-beans-on-gray-background-black-coffee-cup-aromatic.webp?a=1&b=1&s=612x612&w=0&k=20&c=k9C7x__Tidx7ve7Yutoc5mByzzavR_DC6B4EiYyz6I0='
//   },
//   {id:'7',
//     name: 'Americano',
//     description: 'Bold espresso balanced with hot water for a smooth finish.',
//     price: 139,
//     image: 'https://plus.unsplash.com/premium_photo-1675435644687-562e8042b9db?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y29mZmVlJTIwaW1hZ2VzfGVufDB8fDB8fHww'
//   },
//   {id:'8',
//     name: 'Hazelnut Latte',
//     description: 'Creamy latte infused with sweet roasted hazelnut flavor.',
//     price: 199,
//     image: 'https://images.unsplash.com/photo-1512568400610-62da28bc8a13?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y29mZmVlJTIwaW1hZ2VzfGVufDB8fDB8fHww'
//   },
//   {id:'9',
//     name: 'Vanilla Latte',
//     description: 'Smooth espresso and steamed milk with sweet vanilla.',
//     price: 189,
//     image: 'https://images.unsplash.com/photo-1652507733698-b0c536a92cd4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEzfHx8ZW58MHx8fHx8'
//   },
//   {id:'10',
//     name: 'Caramel Macchiato',
//     description: 'Espresso layered with steamed milk and caramel drizzle.',
//     price: 209,
//     image: 'https://images.unsplash.com/photo-1748295600393-5314e7009c9b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE4fHx8ZW58MHx8fHx8'
//   },
//   {id:'11',
//     name: 'Irish Coffee',
//     description: 'Rich coffee with a smooth and slightly sweet finish.',
//     price: 219,
//     image: 'https://images.unsplash.com/photo-1691775755061-f34cd860e85d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fHw%3D'
//   },
//   {id:'12',
//     name: 'Affogato',
//     description: 'Creamy vanilla ice cream topped with hot espresso.',
//     price: 229,
//     image: 'https://images.unsplash.com/photo-1503481766315-7a586b20f66d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fGNvZmZlZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D'
//   },
//   {id:'13',
//     name: 'Flat White',
//     description: 'Velvety steamed milk combined with rich espresso.',
//     price: 179,
//     image: 'https://images.unsplash.com/photo-1594075731547-8c705bb69e50?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fGNvZmZlZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D'
//   },
//   {id:'14',
//     name: 'Cortado',
//     description: 'Balanced espresso softened with a small amount of warm milk.',
//     price: 169,
//     image: 'https://images.unsplash.com/photo-1533776992670-a72f4c28235e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGNvZmZlZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D'
//   },
//   {id:'15',
//     name: 'Spanish Latte',
//     description: 'Bold espresso mixed with creamy sweetened milk.',
//     price: 199,
//     image: 'https://plus.unsplash.com/premium_photo-1670445287762-372300cdcb77?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGNvZmZlZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D'
//   },
//   {id:'16',
//     name: 'Iced Mocha',
//     description: 'Chilled espresso, chocolate, milk, and ice blended together.',
//     price: 199,
//     image: 'https://images.unsplash.com/photo-1497515114629-f71d768fd07c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y29mZmVlJTIwaW1hZ2VzfGVufDB8fDB8fHww'
//   },
//   {id:'17',
//     name: 'Iced Americano',
//     description: 'Refreshing espresso poured over chilled water and ice.',
//     price: 149,
//     image: 'https://images.unsplash.com/photo-1587080413959-06b859fb107d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fGNvZmZlZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D'
//   },
//   {id:'18',
//     name: 'Iced Vanilla Latte',
//     description: 'Cold espresso and milk sweetened with smooth vanilla.',
//     price: 199,
//     image: 'https://media.istockphoto.com/id/1467199060/photo/cup-of-coffee-with-smoke-and-coffee-beans-on-old-wooden-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=YJZXeiAcr9Z-Q837HDy4uzJj7mSA1loVA8xMB5RXcCs='
//   },
//   {id:'19',
//     name: 'Hazelnut Mocha',
//     description: 'Decadent chocolate coffee with a delicious hazelnut twist.',
//     price: 209,
//     image: 'https://images.unsplash.com/photo-1596098823457-74e360fcd023?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGNvZmZlZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D'
//   },
//   {id:'20',
//     name: 'Classic Brewed Coffee',
//     description: 'Freshly brewed coffee with a smooth and comforting taste.',
//     price: 119,
//     image: 'https://media.istockphoto.com/id/2232885441/photo/white-cup-of-black-coffee-on-coffee-beans-background-top-view.webp?a=1&b=1&s=612x612&w=0&k=20&c=wJSeiJ8odiJCz6zIdGDmO3MDJ_cub5ntTOlS3jwNsvM='
//   }
// ]

 apiUrl=`https://coffee-6a2e1-default-rtdb.firebaseio.com/coffee/-P0WE9TGHm4PmQAc2fAL`;

constructor(private http:HttpClient){}

getProducts():Observable<any>{
        return this.http.get(`${this.apiUrl}.json`);

    }

deleteproduct(id:string):Observable<any>{
return this.http.delete(`${this.apiUrl}/${id}.json`);
}



}