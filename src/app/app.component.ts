import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  counts: number[] = [];

  onGameStarted(count: number) {
    this.counts.push(count);
  }
}
