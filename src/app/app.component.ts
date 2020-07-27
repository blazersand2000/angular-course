import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Store } from '@ngrx/store';
import { LoggingService } from './logging.service';
import * as fromApp from './store/app.reducer';
import * as AuthActions from './auth/store/auth.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(
    //private authService: AuthService, 
    private store: Store<fromApp.AppState>,
    private loggingService: LoggingService,
    @Inject(PLATFORM_ID) private platformId
  ) {}
  
  ngOnInit() {
    //this.authService.autoLogin();
    if (isPlatformBrowser(this.platformId)) {
      this.store.dispatch(new AuthActions.AutoLogin());
    } else {
      
    }
    this.loggingService.printLog("Hello from AppComnonent ngOnInit");
  }
}
