import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Istd } from 'src/app/Models/student';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {
 studentsarr:Array<Istd> = [
  {
    studentName: "Rahul Sharma",
    email: "rahul@gmail.com",
    phoneNumber: "9876543210",
    course: "JavaScript",
    id:'1'
  },
  {
    studentName: "Priya Patel",
    email: "priya@gmail.com",
    phoneNumber: "9876543211",
    course: "React",
    id:'2'
  },
  {
    studentName: "Amit Kumar",
    email: "amit@gmail.com",
    phoneNumber: "9876543212",
    course: "Python",
    id:'3'
  },
  {
    studentName: "Sneha Singh",
    email: "sneha@gmail.com",
    phoneNumber: "9876543213",
    course: "Java",
    id:'4'
  }
];
  constructor() { }

  ngOnInit(): void {
  }

isinEditMode:boolean=false;
edit!:Istd

@ViewChild('studentName')studentName!:ElementRef
@ViewChild('email')email!:ElementRef
@ViewChild('phoneNumber')phoneNumber!:ElementRef
@ViewChild('course')course!:ElementRef



onStdAdd(
  studentName:HTMLInputElement,
  email:HTMLInputElement,
  course:HTMLInputElement,
  phoneNumber:HTMLInputElement

  
){
let NEW_STD:Istd={
  studentName:studentName.value,
  email:email.value,
  course:course.value,
  phoneNumber:phoneNumber.value,
  id:Date.now().toString()


}

this.studentsarr.push(NEW_STD)
}

onRemove(pid:string){
  let getIndex=this.studentsarr.findIndex(s=>s.id===pid)

  this.studentsarr.splice(getIndex,1)
}

onEdit(stude:Istd){
  this.isinEditMode=true
  this.edit=stude
    this.studentName.nativeElement.value=stude.studentName,
    this.email.nativeElement.value=stude.email,
    this.phoneNumber.nativeElement.value=stude.phoneNumber,
    this.course.nativeElement.value=stude.course

  }
onupdate(){
 let  UPDATE_ID=this.edit.id
  let update_Obj:Istd={
    studentName:this.studentName.nativeElement.value,
    email:this.email.nativeElement.value,
    phoneNumber:this.phoneNumber.nativeElement.value,
    course:this.course.nativeElement.value,
    id:UPDATE_ID

  }
let getIndex=this.studentsarr.findIndex(s=>s.id===UPDATE_ID)

this.studentsarr[getIndex]=update_Obj
this.studentName.nativeElement.value=''
this.email.nativeElement.value=''
this.phoneNumber.nativeElement.value=''
this.course.nativeElement.value=''

this.isinEditMode=false

}
}
