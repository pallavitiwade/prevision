import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IProduct } from 'src/app/Models/coffee';
import { AuthService } from 'src/app/service/Auth';
import { cartService } from 'src/app/service/cart';
import { menuService } from 'src/app/service/menu';
import { SearchService } from 'src/app/service/search';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  products:any[]=[]
  Count=0;
   filteredCoffee:any[] = [];
  searchValue='';
  constructor(private cart:cartService,
    private menu:menuService,
    private router:Router,
    private searchService:SearchService,
      private authService: AuthService,
  ) { }

  ngOnInit(): void {

  this.cart.getCartCount().subscribe(count => {
      this.Count = count;
    })
}
gotoMenu(){
  if(this.router.url!=='/Menu'){
    this.router.navigate(['/Menu']);
  }
}
SearchCoffee(){
  this.searchService.setSearchText(this.searchValue)
  this.router.navigate(['/Menu'])
}


logout() {

  this.authService.logout();

  this.router.navigate(['/login']);

}


}
