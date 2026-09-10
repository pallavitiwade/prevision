import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { IProduct } from 'src/app/Models/coffee';
import { menuService } from 'src/app/service/menu';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

products:IProduct[] = [];
  constructor(
    private _routes:ActivatedRoute,
   private _menu:menuService,
   private _router:Router
    
  ) { }

  ngOnInit(): void {
this.getmenu()
  }

  getmenu(){
   return  this._menu.getProducts()
  }


  



  


}
