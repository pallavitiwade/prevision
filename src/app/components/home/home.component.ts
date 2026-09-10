import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { categories } from 'src/app/const/food';
import { IProduct } from 'src/app/Models/coffee';
import { ICategory } from 'src/app/Models/foods';
import { coffeeService } from 'src/app/service/coffee';
import { menuService } from 'src/app/service/menu';
import { SnackBarService } from 'src/app/service/snackbar';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

   MenuArr:IProduct[]=[]
count:number=0
  constructor(
 private _menus:menuService,
    private coffee:coffeeService,
    private router:Router,
    private snackbar: SnackBarService
  ) { }

  ngOnInit(): void {
this.addToCart()
this.get()
  }

addToCart(){
  this._menus.getProducts();
}

  openMenu(){
this.router.navigate(['/Menu'])

  }

  increaseCount(){
    this.count++
    this.snackbar.show('coffee added to cart successfully !!!')

  }
  get(){
  this.MenuArr= this.coffee.pro();
  console.log(this.MenuArr)
  }
  
  


}
