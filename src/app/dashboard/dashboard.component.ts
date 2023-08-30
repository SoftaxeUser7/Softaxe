import { Component} from '@angular/core';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
 

})
export class DashboardComponent {
  expandedSubMenus: string[] = [];
  isSidebarOpen = false;
  isMobileMenuOpen = false;

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }


  toggleSubMenu(subMenu: string): void {
    if (this.isSubMenuExpanded(subMenu)) {
      this.expandedSubMenus = this.expandedSubMenus.filter(item => item !== subMenu);
    } else {
      this.expandedSubMenus.push(subMenu);
    }
  }

  isSubMenuExpanded(subMenu: string): boolean {
    return this.expandedSubMenus.includes(subMenu);
  }

  showSidebar = true;

}