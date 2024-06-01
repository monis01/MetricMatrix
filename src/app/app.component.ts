import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';
import { HTTPInterceptor } from './core/interceptors/auth.interceptor';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DashboardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: HTTPInterceptor,
    multi: true,
  },]
})
export class AppComponent {
  title = 'futureBoard';
}

/**
 * /dashboard
 * /home
 */