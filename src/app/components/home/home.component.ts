import { Component, OnInit } from '@angular/core';
import { categories } from 'src/app/const/food';
import { Icoffee } from 'src/app/Models/coffee';
import { ICategory } from 'src/app/Models/foods';
import { coffeeService } from 'src/app/service/coffee';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

   products:Icoffee[]=[]

  constructor(
    private coffee:coffeeService,
  ) { }

  ngOnInit(): void {
this.addToCart()
  }

addToCart(){
 this.products= this.coffee.getProducts();
}

  openMenu(){


  }


}
