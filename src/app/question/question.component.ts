import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent {
  
currentQuestionIndex: number = 0;
selectedOption: string | undefined;
questions = [
  {
    text: '1. Which of these elements in HTML can be used for making a text bold?',
    options: ['a. <a>', 'b. <pre>', 'c. <br>', 'd. <b>']
  },
  {
    text: '2. Which tag do we use in HTML for inserting a line-break?',
    options: ['a. <a>', 'b. <br>', 'c. <b>', 'd. <pre>']
  },
  {
    text: '3. How to create a hyperlink in HTML?',
    options: ['a. <a link = “www.thinkandlearn.com”> thinkandlearn.com </a>',
      'b. <a> www.thinkandlearn.com <thinkandlearn.com /a>',
      'c. <a href = “www.thinkandlearn.com”> thinkandlearn.com </a>',
      'd. <a url = “www.thinkandlearn.com” thinkandlearn.com /a>']
  },
  {
    text: '4. In HTML, how do we insert an image?',
    options: ['a. <img src = “jtp.png” />',
      'b. <img href = “jtp.png” />',
      'c. <img link = “jtp.png” />',
      'd. <img url = “jtp.png” />']
  },

  {
    text: '5. Which tag do we use to define the options present in the drop-down selection lists?',
    options: ['a. <list>', 'b. <option>', 'c. <dropdown>', 'd. <select>']
  },
  // Add more questions as needed
];

constructor(private router: Router, private route: ActivatedRoute) { }

ngOnInit() {
  this.route.params.subscribe(params => {
    this.currentQuestionIndex = +params['id'] - 1; // Adjust for 0-based index
  });
}

nextQuestion() {
  if (this.currentQuestionIndex < this.questions.length - 1) {
    this.currentQuestionIndex++;
    this.selectedOption = undefined; // Clear selected option
  } else {
    this.router.navigate(['/result']);
  }
}
}


