import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent {

  someText = "TESTANDO O PIPE OPERATOR";

  birthday = new Date(1988, 3, 15);
  today = new Date();

}
