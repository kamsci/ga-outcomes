import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'ga-home',
  templateUrl: 'app/home.component.html' 
})
export class HomeComponent { 
  onSubmit(form: NgForm) {
    console.log(form);
  }
}
