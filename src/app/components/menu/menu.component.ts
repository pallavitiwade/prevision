import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Route, Router } from '@angular/router';
import {  IProduct } from 'src/app/Models/coffee';
import { cartService } from 'src/app/service/cart';
import { menuService } from 'src/app/service/menu';
import { SearchService } from 'src/app/service/search';
import { SnackBarService } from 'src/app/service/snackbar';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  id!:string;
    products:IProduct[]=[]
    filteredCoffee:any[] = [];//coffeedata
  searchText: string = '';
    IProduct: any[] = [];

  constructor(
    private _menus:menuService,
    private router:Router,
    private _route:ActivatedRoute,
    private cart:cartService,
    private searchService:SearchService,
    private snackbar: SnackBarService
    
    
  ) { }

  ngOnInit(): void {
    // this.getCoffee()
    this.getAddProduct()
this.searchService.searchText$.subscribe(searchText=>{
  const text=searchText.toLocaleLowerCase().trim();

if(!text){
  this.products=this.IProduct;
  return
}
this.products=this.IProduct.filter(item=>
  item.name.toLowerCase().includes(text)
)

})
   
     }
    // Then listen to navbar search
    // this._route.queryParams.subscribe(params => {

    //   this.searchText = params['search'] || '';

    //   console.log('Search from Navbar:', this.searchText);

      // this.filterCoffee();

    // });
  
  

  getAddProduct(){
    this._menus.getProducts().subscribe((data:any)=>{
      this.products=Object.keys(data || {}).map(key=>({
        ...data[key],
        id:key
      }));
      console.log(this.products)
    })
  }


  deleteCard(id:string){
    console.log('delete',id);

    this._menus.deleteproduct(id).subscribe({
      next:()=>{
        console.log('product is deleted',id)
       this.products=this.products.filter(menu=>menu.id!==id)
           this.snackbar.show('coffee removed succesfully !!!')

      },
       error:(error)=>{
      console.log('delete',error);
     }

  });
  
}
 addToCart(product:IProduct){
  
    this.cart.addtoCart(product);
    this.router.navigate(['/Cart'])
    this.cart.addCart()
    this.snackbar.show('coffee Added to a Cart succesfully !!!')

    console.log('select',product)
  }


//   getCoffee(){
//     this._menus.getProducts().subscribe({
//       next: (data) => {
//         console.log('Firebase data:', data);
//         const parentKey = Object.keys(data)[0];
//         const produ = data[parentKey];
//         this.products = Object.keys(produ)
//           .map(key => ({
//             id: key,
//             ...produ[key]
//           }))
//           .filter(coffee =>
//             coffee.name &&
//             coffee.description &&
//             coffee.price &&
//             coffee.image
//           );

//         // Initially show all valid products
//        console.log('Valid Coffee:', this.filteredCoffee);
//         // Apply search after Firebase data arrives
//         this.filterCoffee();
//       },
//       error: (error) => {
//         console.log('Firebase error:', error);
//       }
//     });
//   }
//   filterCoffee() {
//  const search = this.searchText
//       .trim()
//       .toLowerCase();
//     // Search is empty → show all valid coffee
//     if (!search) {
//       this.products = [...this.filteredCoffee];
//       return;
//     }
//     // Search has text → show only matching coffee
//     this.products = this.filteredCoffee.filter(coffee =>
//       coffee.name
//         ?.toLowerCase()
//         .includes(search)
//     );
//   }


  gotoAbout(){
      this.router.navigate(['/About'])

  }
   
}


  

 










 
