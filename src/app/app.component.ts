import { Component, OnInit } from '@angular/core';
import { UsersService } from './users.service';
import { CounterService } from './counter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit{
  activeUsers: string[] = [];
  inactiveUsers: string[] = [];

  activeToInactiveCount: number = 0;
  inactiveToActiveCount: number = 0;

  constructor(private usersService: UsersService,
    private counterService: CounterService) {
      this.counterService.activeToInactiveUpdated.subscribe((count: number) => this.activeToInactiveCount = count);
      this.counterService.inactiveToActiveUpdated.subscribe((count: number) => this.inactiveToActiveCount = count);
    }

  ngOnInit() {
    this.activeUsers = this.usersService.activeUsers;
    this.inactiveUsers = this.usersService.inactiveUsers;

    this.activeToInactiveCount = this.counterService.activeToInactive;
    this.inactiveToActiveCount = this.counterService.inactiveToActive;
  }

}
