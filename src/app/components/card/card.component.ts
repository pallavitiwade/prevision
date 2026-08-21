import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Icard } from 'src/app/Models/blogs';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  blogsArr:Array<Icard>=[
    {
      "title": "Introduction",
      "body": "This is an introduction to the topic.",
      "id":"1"
    },
    {
      "title": "Getting Started",
      "body": "Learn the basic steps to get started.",
          "id":"2"
  
    },
    {
      "title": "Features",
      "body": "Explore the main features and capabilities.",
          "id":"3"
  
    },
    {
      "title": "Benefits",
      "body": "Discover the key benefits and advantages.",
          "id":"4"
  
    },
    {
      "title": "Best Practices",
      "body": "Follow these best practices for better results.",
          "id":"5"
  
    },
    {
      "title": "Tips and Tricks",
      "body": "Use these useful tips to improve your workflow.",
          "id":"6"
  
    },
    {
      "title": "Common Mistakes",
      "body": "Avoid these common mistakes when getting started.",
          "id":"7"
  
    },
    {
      "title": "Examples",
      "body": "Here are some examples to help you understand the concept.",
          "id":"8"
  
    },
    {
      "title": "Conclusion",
      "body": "Review the important points covered in this guide.",
          "id":"9"
  
    },
    {
      "title": "Next Steps",
      "body": "Continue learning and apply what you have learned.",
          "id":"10"
  
    }
  ]

  isInEditMode:boolean=false;
  editObj!:Icard

@ViewChild('title') title!:ElementRef;
@ViewChild('body') body!:ElementRef;
@ViewChild('userId') userId!:ElementRef;


  onAdd(
  title:HTMLInputElement,
  body:HTMLTextAreaElement,
  userId:HTMLSelectElement
  ){
    let new_card:Icard={
      title:title.value,
      body:body.value,
      id:Date.now().toString()
    }
    this.blogsArr.unshift(new_card)
    title.value=''
    body.value=''
    userId.value='1'
  }

  onRemove(id:string){
    let Get_Index=this.blogsArr.findIndex(c=>c.id===id)
    this.blogsArr.splice(Get_Index,1)
  }
  onEdit(card:Icard){
    this.isInEditMode=true
    this.editObj=card
    this.title.nativeElement.value=card.title,
    this.body.nativeElement.value=card.body
    }

    onUpdate(){
      let Update_id=this.editObj.id
      let update_obj:Icard={
        title:this.title.nativeElement.value,
        body:this.body.nativeElement.value,
        id:Update_id
      }
      let getIndex=this.blogsArr.findIndex(c=>c.id===Update_id)

      this.blogsArr[getIndex]=update_obj;
      this.title.nativeElement.value=''
      this.body.nativeElement.value=''
      this.userId.nativeElement.value='1'
      this.isInEditMode=false

    }

  }




  


