import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { SharedService } from './services/shared.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Assets';

  constructor(public sharedService: SharedService){}

  showSidebar = true;

  toggleSidebar() {
    this.showSidebar = !this.showSidebar;
  }
}
