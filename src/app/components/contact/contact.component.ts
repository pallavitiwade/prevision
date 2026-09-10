import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


  interface Feedback {
  name: string;
  comment: string;
  rating: number;
}
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {


  name: string = '';
  comment: string = '';
  rating: number = 0;

  feedbackList: Feedback[] = [];


  // Select rating
  selectRating(star: number): void {
    this.rating = star;
  }


  // Submit feedback
  submitFeedback(): void {

    if (!this.name.trim()) {
      alert('Please enter your name');
      return;
    }

    if (!this.comment.trim()) {
      alert('Please enter your feedback');
      return;
    }

    if (this.rating === 0) {
      alert('Please select a rating');
      return;
    }


    const feedback: Feedback = {
      name: this.name,
      comment: this.comment,
      rating: this.rating
    };


    // Add new feedback
    this.feedbackList.push(feedback);


    // Clear form
    this.name = '';
    this.comment = '';
    this.rating = 0;
  }
}




