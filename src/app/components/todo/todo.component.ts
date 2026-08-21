import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Itodo } from 'src/app/Models/todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

   todosarr:Array<Itodo> = [
  { id: '1', 
    title: "Learn JavaScript"
   },
  { id:' 2',
     title:"Build a todo app"
     },
  { id: '3',
     title: "Practice React" 
    },
  { id: '4',
     title: "Read a book" }
];

  isinEditMode:boolean=false
  editTodo!:Itodo
  @ViewChild('title')title!:ElementRef
  @ViewChild('userId')userId!:ElementRef

  onAddTodo(ele:HTMLInputElement){
    let val=ele.value
    let newTodo:Itodo={
      title:val,
      id:Date.now().toString()
    }
    this.todosarr.push(newTodo)
  }

  onRemove(id:string){
    let getIndex=this.todosarr.findIndex(t=>t.id===id)

    this.todosarr.splice(getIndex,1)

  }
  OnEdit(todo:Itodo){
    this.isinEditMode=true
    this.editTodo=todo;
    this.title.nativeElement.value=todo.title
  }
onUpdate(){
  let UPDATE_ID=this.editTodo.id
  let update_Obj:Itodo={
    title:this.title.nativeElement.value,
    id:UPDATE_ID
  }
let getIndex=this.todosarr.findIndex(t=>t.id===UPDATE_ID)

this.todosarr[getIndex]=update_Obj
this.title.nativeElement.value=''
this.isinEditMode=false

}



}
