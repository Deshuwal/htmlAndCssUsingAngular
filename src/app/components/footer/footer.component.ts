import { Component, OnInit } from '@angular/core';
import { faBook, faCoffee } from '@fortawesome/free-solid-svg-icons';
// import { faB } from '@fortawesome/free-solid-svg-icons';
import { fa0 } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  faCoffee =faCoffee;
  fatimes =faBook;

  constructor() { }

  ngOnInit(): void {
  }

}
