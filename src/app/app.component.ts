import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  template:`<cars-list></cars-list>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  
}
