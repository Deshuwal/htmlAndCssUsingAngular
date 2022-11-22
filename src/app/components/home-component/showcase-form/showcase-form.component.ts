import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { EmailValidator } from '@angular/forms';
import { formInterface } from '../../../formInterface';

@Component({
  selector: 'app-showcase-form',
  templateUrl: './showcase-form.component.html',
  styleUrls: ['./showcase-form.component.css']
})
export class ShowcaseFormComponent implements OnInit {
    
  //setting emitter option
  @Output() showcaseForm:EventEmitter<formInterface> = new EventEmitter();
  //initalizing properties(value/varable) from the html
  name!: string;
  company!: string;
  email!: string;

  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(){
    //setting up input values
    const newEntry ={
      name:this.name,
      company: this.company,
      email: this.email
    };
    //clearing the inputfield
    this.name ="";
    this.company ="";
    this.email ="";

    this.showcaseForm.emit(newEntry)
  }

}
