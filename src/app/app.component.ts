import { Component } from '@angular/core';
import {HeaderComponent} from './navigation/header/header.component';
import {FooterComponent} from './navigation/footer/footer.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  imports: [
    HeaderComponent,
    FooterComponent
  ],
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MyApp';
}
