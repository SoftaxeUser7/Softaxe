import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  constructor(private sharedService: SharedService) { }

  ngOnInit(): void {
    // Hide header and sidebar on the login page
    this.sharedService.showHeaderSidebar = false;
  }
}
