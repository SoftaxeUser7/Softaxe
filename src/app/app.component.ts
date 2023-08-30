import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Assets';
  showSidebar = true;

  toggleSidebar() {
    this.showSidebar = !this.showSidebar;
  }
}
