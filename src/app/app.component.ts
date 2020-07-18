import { PromService } from './services/prom.service';
import { Component } from '@angular/core';
import { PromApiToken } from './models/prom/token.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'promp';
}
