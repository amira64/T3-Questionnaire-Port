import { Component } from '@angular/core';
import { Router} from'@angular/router';
@Component({
  selector: 'app-Questionnere',
  templateUrl: './Questionnere.component.html',
  styleUrls: ['./Questionnere.component.css']
})
export class ResultComponent {
  constructor(private router: Router) { }

  submitQuestionnaire() {
    // Handle submission logic here
    // You can access user selections from the QuestionComponent
    this.router.navigate(['/']);
  }
}




