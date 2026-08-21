import { Injectable } from "@angular/core";
import { Icard, Ires } from "../Models/blogs";
import { blogs } from "../const/blog";
import { Observable, of, Subject } from "rxjs";
import { HttpClient } from "@angular/common/http";


@Injectable({
    providedIn:'root'
})

export class BlogService{

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
private editcardSub$:Subject<Icard>=new Subject()
editcardObj$:Observable<Icard>=this.editcardSub$.asObservable()
constructor(


){}
emitEditCard(ca:Icard){
  this.editcardSub$.next(ca)
}

fetchCard():Observable<Icard[]>{
    return of(this.blogsArr)
}

addCard(card:Icard):Observable<Ires>{
    this.blogsArr.unshift(card)

    let res={
        msg:`new Card ${card.title} Added succesfully !!!`,
        data:card
    }
    return of(res)
}
getCardById(id:string){
    return this.blogsArr.find(p=>p.id===id)
}



}



