import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output()
  gameStarted = new EventEmitter<number>();
  playing = false;
  timer;
  counter = 0;

  constructor() { }

  ngOnInit() {
  }

  onStart() {
    if (this.playing) {
      return;
    }
    this.timer = setInterval(() => {this.counter++; this.gameStarted.emit(this.counter)}, 1000)
    this.playing = true;
  }

  onStop() {
    if (!this.playing) {
      return;
    }
    clearInterval(this.timer);
    this.counter = 0;
    this.playing = false;
  }

}
