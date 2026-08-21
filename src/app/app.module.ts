import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from'@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { CardComponent } from './components/card/card.component';
import { StudentComponent } from './components/student/student.component';
import { TodoComponent } from './components/todo/todo.component';
import {NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { ServiceComponent } from './components/service/service.component';
import { ProductComponent } from './components/product/product.component';
import { UserComponent } from './components/user/user.component';
import { MatRippleModule } from '@angular/material/core';
@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    StudentComponent,
    TodoComponent,
    HomeComponent,
    ServiceComponent,
    ProductComponent,
    UserComponent,
    NavbarComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatTableModule,
    MatIconModule,
    FormsModule,
    MatCardModule,
    MatRippleModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
