import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  displayParagraph: boolean = false;
  clicks = [];

  OnDisplayDetailsClick(event: Event) {
    this.displayParagraph = !this.displayParagraph;
    this.clicks.push(event.timeStamp / 1000);
    console.log(event.timeStamp);
  }
}
