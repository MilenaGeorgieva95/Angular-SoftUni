import { Component } from '@angular/core';
import { MyStructuralDirective } from '../my-structural.directive';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  isShown: boolean = true;
  toggleMe(): void {
    this.isShown = !this.isShown;
  }

  simpleClick(myRef:MyStructuralDirective){
    console.log(myRef);
    
  }
}
